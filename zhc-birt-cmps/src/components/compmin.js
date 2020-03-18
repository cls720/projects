import birt from './Birt/complist'
import hc from './Hc/complist'
import hcCompose from './HcCompose/complist'

import BirtCellChildren from "./BirtCellChildren/min"

const cmps = {
    BirtCellChildren
}

export default { ...cmps, ...birt, ...hc, ...hcCompose }