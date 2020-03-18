import birt from './Birt/compmin'
import hc from './Hc/compmin'
import hcCompose from './HcCompose/complist'

import BirtCellChildren from "./BirtCellChildren/min"

const cmps = {
    BirtCellChildren
}

export default { ...cmps, ...birt, ...hc, ...hcCompose }