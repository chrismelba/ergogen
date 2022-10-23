// Kailh Choc PG1350
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh choc hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
// 
// note: hotswap and reverse can be used simultaneously

module.exports = {
  nets: {
    from: undefined,
    to: undefined
  },
  params: {
    class: 'S',
    hotswap: false,
    reverse: false,
    keycaps: false
  },
  body: p => {
    const standard = `
      (module Cherry-MX-Low-Profile (layer F.Cu) (tedit 5B8593EA)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) ${p.ref_hide} (layer F.SilkS) (effects (font (size 1 1) (thickness 0.2))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.2 1.2) (thickness 0.2032))))
      ${''/* corner marks */}
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.1524))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.1524))
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.1524))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.1524))
      (fp_line (start 7.5 7.5) (end -7.5 7.5) (layer Eco2.User) (width 0.1524))
      (fp_line (start -7.5 7.5) (end -7.5 -7.5) (layer Eco2.User) (width 0.1524))
      (fp_line (start -7.5 -7.5) (end 7.5 -7.5) (layer Eco2.User) (width 0.1524))
      (fp_line (start 7.5 -7.5) (end 7.5 7.5) (layer Eco2.User) (width 0.1524))
      ${''/* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 5 5) (drill 5) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at 0 1.25) (size 2.5 2.5) (drill 2.5) (layers *.Cu *.Mask))
      `
    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
      `
    function pins(def_neg, def_pos, def_side) {
        return `
        ${''/* pins */}
        (pad 1 thru_hole oval (at ${def_pos}2.6 -5.75) (size 2 2) (drill 1.27) (layers ${def_side}.Cu ${def_side}.Mask) ${p.net.from.str})
        (pad 2 thru_hole oval (at ${def_neg}4.4 -4.7) (size 2 2) (drill 1.27) (layers ${def_side}.Cu ${def_side}.Mask) ${p.net.to.str})
      `
    }
    if(p.param.reverse) {
      return `
        ${standard}
        ${p.param.keycaps ? keycap : ''}
        ${pins('-', '', 'B')}
        ${pins('', '-', 'F')})
        `
    } else {
      return `
        ${standard}
        ${p.param.keycaps ? keycap : ''}
        ${pins('-', '', 'B')})
        `
    }
  }
}