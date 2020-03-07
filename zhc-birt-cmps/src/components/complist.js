import birt from './Birt/complist'
import hc from './Hc/complist'
import charts from './Charts/complist'

import BirtCellChildren from "./BirtCellChildren"

const cmps = {
    BirtCellChildren
}

export default { ...cmps, ...birt, ...hc, ...charts }