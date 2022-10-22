// Any MX switch
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh MX hotswap sockets
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
      reverse: false,
      keycaps: false
  },
  body: p => {
    const standard = `
    (module Cherry-MX-Low-Profile (layer F.Cu) (tedit 5B8593EA)
    ${p.at /* parametric position */}

    ${'' /* footprint reference */}
  (fp_text reference "Cherry MX Low Profile" (at 0 -7.14375 180) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.2)))
  )
  (fp_text value MX (at 0 -5.08 180) (layer F.SilkS) hide
    (effects (font (size 1.2 1.2) (thickness 0.2032)))
  )
  (fp_line (start 6.95 6.95) (end -6.95 6.95) (layer Dwgs.User) (width 0.15))
  (fp_line (start -6.95 6.95) (end -6.95 -6.95) (layer Dwgs.User) (width 0.15))
  (fp_line (start -6.95 -6.95) (end 6.95 -6.95) (layer Dwgs.User) (width 0.15))
  (fp_line (start 6.95 -6.95) (end 6.95 6.95) (layer Dwgs.User) (width 0.15))
  (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start 7.5 7.5) (end -7.5 7.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start -7.5 7.5) (end -7.5 -7.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start -7.5 -7.5) (end 7.5 -7.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start 7.5 -7.5) (end 7.5 7.5) (layer Dwgs.User) (width 0.15))
  (pad "" np_thru_hole circle (at 0 0 180) (size 6.25 6.25) (drill 6.25) (layers *.Cu *.Mask))
  (pad 1 thru_hole circle (at 0 6.05 180) (size 2 2) (drill 1.2) (layers *.Cu *.Mask))
  (pad 2 thru_hole circle (at 4.13 3.3 41.9) (size 2 2) (drill 1.2) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at 0 3.7 180) (size 2.3 2.3) (drill 2.3) (layers *.Cu *.Mask))
  `
  const keycap = `
  ${'' /* keycap marks */}
  (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
  `
)
        `
    

        return `
        ${standard}
        ${p.param.keycaps ? keycap : ''}
        ${pins('-', '', 'B')})
        `
  }
}