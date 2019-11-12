/**
 * 报表模型数据返回接口
 */
// 基础报表
import {
  formModel
} from "./birt/Form.js";
import {
  formListModel
} from "./birt/FormList";
import {
  gridListModel
} from "./birt/GridList";
import {
  gridGroupStatModel
} from "./birt/GridGroupStat";
import {
  gridLockModel
} from "./birt/GridLock";
import {
  columnSplitModel
} from "./birt/ColumnSplit";
import {
  cardSplitModel
} from "./birt/CardSplit";
import {
  invoicePrintModel
} from "./birt/InvoicePrint";


// 高级报表
import {
  archivesModel
} from "./birt/Archives.js";
import {
  electronicSignatureModel
} from "./birt/ElectronicSignature.js";
import {
  documentsModel
} from "./birt/Documents";
import {
  dataDeepModel
} from "./birt/DataDeep/DataDeep";
import {
  orderDetailModel1001
} from "./birt/DataDeep/OrderDetail-1001";
import {
  orderDetailModel1002
} from "./birt/DataDeep/OrderDetail-1002";
import {
  orderDetailModel1003
} from "./birt/DataDeep/OrderDetail-1003";
import {
  orderDetailModel1004
} from "./birt/DataDeep/OrderDetail-1004";
import {
  orderDetailModel1005
} from "./birt/DataDeep/OrderDetail-1005";
import {
  orderDetailModel1006
} from "./birt/DataDeep/OrderDetail-1006";
import {
  bomDetailModel1001
} from "./birt/DataDeep/BomDetail-1001";
import {
  bomDetailModel1002
} from "./birt/DataDeep/BomDetail-1002";
import {
  bomDetailModel1003
} from "./birt/DataDeep/BomDetail-1003";
import {
  bomDetailModel1004
} from "./birt/DataDeep/BomDetail-1004";
import {
  bomDetailModel1005
} from "./birt/DataDeep/BomDetail-1005";
import {
  bomDetailModel1006
} from "./birt/DataDeep/BomDetail-1006";

// 图表
import {
  pieModel
} from "./birt/Charts/Pie";
import {
  barModel
} from "./birt/Charts/Bar";
import {
  lineModel
} from "./birt/Charts/Line";
import {
  chartDeepModel
} from "./birt/Charts/ChartDeep";

export function getBirtModel(birtUrl, params) {
  return new Promise((resolve, reject) => {
    let result = {
      data: {}
    }

    if (birtUrl === "/birt/basic/form") {
      result.data = formModel;
    } else if (birtUrl === "/birt/basic/form-list") {
      result.data = formListModel;
    } else if (birtUrl === "/birt/basic/grid-list") {
      result.data = gridListModel
    } else if (birtUrl === "/birt/basic/grid-group-stat") {
      result.data = gridGroupStatModel
    } else if (birtUrl === "/birt/basic/grid-lock") {
      result.data = gridLockModel
    } else if (birtUrl === "/birt/basic/column-split") {
      result.data = columnSplitModel
    } else if (birtUrl === "/birt/basic/card-split") {
      result.data = cardSplitModel
    } else if (birtUrl === "/birt/basic/invoice-print") {
      result.data = invoicePrintModel
    } else if (birtUrl === "/birt/advince/archives") {
      result.data = archivesModel;
    } else if (birtUrl === "/birt/advince/electronic-signature") {
      result.data = electronicSignatureModel;
    } else if (birtUrl === "/birt/advince/documents") {
      result.data = documentsModel;
    } else if (birtUrl === "/birt/advince/data-deep") {
      result.data = dataDeepModel;
    } else if (birtUrl === "/birt/advince/data-deep/order-detail") {
      console.log(JSON.stringify(params));
      if (params.orderId && params.orderId.endsWith("-1001"))
        result.data = orderDetailModel1001;
      else if (params.orderId && params.orderId.endsWith("-1002"))
        result.data = orderDetailModel1002;
      else if (params.orderId && params.orderId.endsWith("-1003"))
        result.data = orderDetailModel1003;
      else if (params.orderId && params.orderId.endsWith("-1004"))
        result.data = orderDetailModel1004;
      else if (params.orderId && params.orderId.endsWith("-1005"))
        result.data = orderDetailModel1005;
      else if (params.orderId && params.orderId.endsWith("-1006"))
        result.data = orderDetailModel1006;
    } else if (birtUrl === "/birt/advince/data-deep/bom-detail") {
      console.log(JSON.stringify(params));
      if (params.orderId && params.orderId.endsWith("-1001"))
        result.data = bomDetailModel1001;
      else if (params.orderId && params.orderId.endsWith("-1002"))
        result.data = bomDetailModel1002;
      else if (params.orderId && params.orderId.endsWith("-1002"))
        result.data = bomDetailModel1002;
      else if (params.orderId && params.orderId.endsWith("-1003"))
        result.data = bomDetailModel1003;
      else if (params.orderId && params.orderId.endsWith("-1004"))
        result.data = bomDetailModel1004;
      else if (params.orderId && params.orderId.endsWith("-1005"))
        result.data = bomDetailModel1005;
      else if (params.orderId && params.orderId.endsWith("-1006"))
        result.data = bomDetailModel1006;
    } else if (birtUrl === "/chart/basic/pie") {
      result.data = pieModel;
    } else if (birtUrl === "/chart/basic/bar") {
      result.data = barModel;
    } else if (birtUrl === "/chart/basic/line") {
      result.data = lineModel;
    } else if (birtUrl === "/chart/deep-join-stat/chart-deep") {
      result.data = chartDeepModel;
    }
    resolve(result)
  })
}
