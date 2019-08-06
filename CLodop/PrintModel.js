import Basic from './BasePrintModel'
import BasicTable from './BasePrintTable'

let PrintModel = {
  //一对二销售单
  OneTwoSale:
    {
      mastInfo: {
        ...Basic,
        InCompanyName: '订货公司：',
        InCustomerName: '仓库名称：',
      },
      Title: '一对二销售单',
      TableData: [
        ...BasicTable,
        {PrintTitle: '订货数量', PrintItem: 'Quantity', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '价格', PrintItem: 'Price', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '明细备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
      ]
    },
  //一对二出库单
  OneTwoOut:
    {
      mastInfo: {
        ...Basic,
        ApplyCode: '申请单号：',
        InCompanyName: '订货公司：',
        OutCompanyName: '发货公司：',
        InCustomerName: '订货仓库：',
        OutWarehouseName: '发货仓库：'
      },
      Title: '一对二出库单',
      TableData: [
        ...BasicTable,
        {PrintTitle: '数量', PrintItem: 'Quantity', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '价格', PrintItem: 'Price', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
      ]
    },
  //一对二退货单
  OneTwoReturn:
    {
      mastInfo: {
        SheetNo: '订单编码：',
        TypeName: '退货类型：',
        OutCompanyName: '退货公司：',
        OutStoreName: '退货仓库：',
        InCompanyName: '收货公司：',
        InStoreName: '收货仓库：'
      },
      Title: '二对一退货单',
      TableData: [
        ...BasicTable,
        {PrintTitle: '退货数量', PrintItem: 'OrderQty', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '退货单价', PrintItem: 'Price', Width: '100',IsPrint: true, IsSum: false},
        // {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
      ]
    },
  //三对二退货单
  ThreeTwoReturn:
    {
      mastInfo: {
        SheetNo: '订单编码：',
        TypeName: '退货类型：',
        SalePointName: '退货售点：',
        PayInName: '退货客户：',
        InCompanyName: '收货公司：',
        PayOutName: '收货客户：',
        InStoreName: '收货仓库：',
        ApprovedAmt: '合计：',
        ManagerAmt: '翻新费：'
      },
      Title: '三对二退货单',
      TableData: [
        ...BasicTable,
        {PrintTitle: '退货单价', PrintItem: 'Price', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '实际金额', PrintItem: 'ActualPrice', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '串码', PrintItem: 'Imei', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
      ]
    },
  //二对一入库单
  TwoOneInReturn:
    {
      mastInfo: {
        SheetNo: '订单编码：',
        TypeName: '退货类型：',
        OutCompanyName: '退货公司：',
        OutStoreName: '退货仓库：',
        InCompanyName: '收货公司：',
        InStoreName: '收货仓库：',
        PayInName: '退货客户：',
        PayOutName: '收货客户：',
        Amt: '合计：',
        ManagerAmt: '翻新费：'
      },
      Title: '二对一入库单',
      TableData: [
        ...BasicTable,
        //ReplyQty
        {PrintTitle: '批复数量', PrintItem: 'ReplyQty', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '串码录入数量', PrintItem: 'ImeiNum', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '退货单价', PrintItem: 'Price', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '明细备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
      ]
    },
  //二对一申请单
  TwoOneReturn:
    {
      mastInfo: {
        SheetNo: '订单编码：',
        TypeName: '退货类型：',
        OutCompanyName: '退货公司：',
        OutStoreName: '退货仓库：',
        InCompanyName: '收货公司：',
        InStoreName: '收货仓库：',
        PayInName: '退货客户：',
        PayOutName: '收货客户：',
        Amt: '合计：',
        ManagerAmt: '翻新费：'
      },
      Title: '二对一申请单',
      TableData: [
        ...BasicTable,
        //ReplyQty
        {PrintTitle: '批复数量', PrintItem: 'ReplyQty', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '串码录入数量', PrintItem: 'ImeiNum', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '退货单价', PrintItem: 'Price', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '明细备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
      ]
    },
  //三对二入库单
  ThreeTwoInReturn:
    {
      mastInfo: {
        SheetNo: '订单编码：',
        TypeName: '退货类型：',
        SalePointName: '退货售点：',
        PayInName: '退货客户：',
        InCompanyName: '收货公司：',
        PayOutName: '收货客户：',
        InStoreName: '收货仓库：',
        ApprovedAmt: '合计：',
        ManagerAmt: '翻新费：'
      },
      Title: '三对二入库单',
      TableData: [
        ...BasicTable,
        {PrintTitle: '退货单价', PrintItem: 'Price', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '实际金额', PrintItem: 'ActualPrice', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '串码', PrintItem: 'Imei', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
      ]
    },
  //二对三销售出库单
  TwoThreeOut:
    {
      mastInfo: {
        InCompanyName: '订货公司：',
        InCustomerName: '订货客户：',
        CustomerPropertyName: '客户属性：',
        OutCompanyName: '发货公司：',
        OutWarehouseName: '发货仓库：'
      },
      Title: '二对三销售出库单',
      TableData: [
        ...BasicTable,
        {PrintTitle: '批复数量', PrintItem: 'Quantity', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '价格', PrintItem: 'Price', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '明细备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
      ]
    },
  //二对三再次出库单
  TwoThreeStepOut:
    {
      mastInfo: {
        InCompanyName: '订货公司：',
        InCustomerName: '订货客户：',
        CustomerPropertyName: '客户属性：',
        OutCompanyName: '发货公司：',
        OutWarehouseName: '发货仓库：'
      },
      Title: '二对三再次出库单',
      TableData: [
        ...BasicTable,
        {PrintTitle: '批复数量', PrintItem: 'Quantity', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '价格', PrintItem: 'Price', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
      ]
    },
  //二对三销售单
  TwoThreeSale:
    {
      mastInfo: {
        ...Basic,
        InCompanyName: '订货售点：',
        InCustomerName: '订货客户：',
        CustomerPropertyName: '客户属性：',
        OutCompanyName: '发货公司：',
        OutWarehouseName: '发货仓库：'
      },
      Title: '二对三销售单',
      TableData: [
        ...BasicTable,
        {PrintTitle: '批复数量', PrintItem: 'Quantity', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '价格', PrintItem: 'Price', Width: '100',IsPrint: true, IsSum: false},
        {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
      ]
    },
  //采购入库单
  purchaseWarehousing:{
    mastInfo: {
      ...Basic,
      InCompanyName: '订货公司：',
      OutCompanyName: '发货公司：',
    },
    Title: '采购入库单',
    TableData: [
      ...BasicTable,
      {PrintTitle: '入库数量', PrintItem: 'Quantity', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  //商品调剂申请，审核入库
  dispensingIn:{
    mastInfo: {
      ...Basic,
      OutCompanyName: '发货公司：',
      InCompanyName: '收货公司：',
      InWarehouseName:'收货仓库：',
    },
    Title: '商品调剂入库单',
    TableData: [
      ...BasicTable,
      {PrintTitle: '数量', PrintItem: 'Quantity', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '明细备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  //商品出库
  dispensingOut:{
    mastInfo: {
      ...Basic,
      InCompanyName: '收货公司：',
      OutCompanyName: '发货公司：',
      OutWarehouseName:'发货仓库：',
    },
    Title: '商品调剂出库单',
    TableData: [
      ...BasicTable,
      {PrintTitle: '数量', PrintItem: 'Quantity', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '明细备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  //工厂退货
  factoryReturns:{
    mastInfo: {
      ...Basic,
      InCompanyName: '收货公司：',
      OutCompanyName: '退货公司：',
      OutWarehouseName:'退货仓库：',
    },
    Title: '工厂退货单',
    TableData: [
      ...BasicTable,
      {PrintTitle: '退货数量', PrintItem: 'Quantity', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '明细备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 终端销售
  terminalSalesModule:{
    mastInfo: {
      ...Basic,
      InCompanyName: '上报售点：',
      CreateUserName: '上报人：',
      SaleTypeName:'销售模式：',
    },
    Title: '终端销售单',
    TableData: [
      ...BasicTable,
      {PrintTitle: '数量', PrintItem: 'Quantity', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '明细备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 批量实销
  bulkSales:{
    mastInfo: {
      ...Basic,
      SaleTypeName:'销售模式：',
    },
    Title: '批量实销单',
    TableData: [
      ...BasicTable,
      {PrintTitle: '数量', PrintItem: 'Quantity', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '明细备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 终端退回
  terminalReturn:{
    mastInfo: {
      ...Basic,
      InCompanyName: '上报售点：',
      CreateUserName: '上报人：',
      SaleTypeName:'销售模式：',
    },
    Title: '终端退回单',
    TableData: [
      ...BasicTable,
      {PrintTitle: '数量', PrintItem: 'Quantity', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '明细备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 转仓管理
  transferApplication:{
    mastInfo: {
      SheetNo: '单号：',
      CompanyName: '转仓公司：',
      OutStoreName: '转出仓库：',
      InStoreName:'转入仓库：',
    },
    Title: '转仓单',
    TableData: [
      ...BasicTable,
      {PrintTitle: '串码名称', PrintItem: 'Imei', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '明细备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 调拨单三代
  generationsOrderThree:{
    mastInfo: {
      SheetNo: '单号：',
      OutSalePointName: '调出单：',
      CustomerName: '调出单客户：',
      InSalePointName:'调入方：',
    },
    Title: '转仓单',
    TableData: [
      ...BasicTable,
      {PrintTitle: '串码名称', PrintItem: 'Imei', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '明细备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强：售后-好机入库（工厂对一代）
  goodPhoneFactoryToOne:{
    mastInfo: {
      Code: '单号：',
      OutCompanyName: '工厂：',
      InCompanyName: '收货公司：',
      InWarehouse:'收货仓库：',
    },
    Title: '好机入库一代',
    TableData: [
      {PrintTitle: '商品编码', PrintItem: 'ProductCode', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '数量', PrintItem: 'InputQty', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强：售后-好机出库（一对二）
  goodPhoneOneToTwo:{
    mastInfo: {
      Code: '单号：',
      AgentName: '地区：',
      InCompanyName: '收货公司：',
      InWarehouse:'收货仓库：',
      OutCompanyName: '发货公司：',
      OutWarehouse: '发货仓库：'
    },
    Title: '好机出库一对二',
    TableData: [
      {PrintTitle: '商品编码', PrintItem: 'ProductCode', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '数量', PrintItem: 'InputQty', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强：售后-好机出库（一对三）
  goodPhoneOneToThree:{
    mastInfo: {
      Code: '单号：',
      OutCompanyName: '发货公司：',
      OutWarehouse: '发货仓库：',
      AgentName: '地区：',
      CustomerName:'售点：'
    },
    Title: '好机出库一对三',
    TableData: [
      {PrintTitle: '商品编码', PrintItem: 'ProductCode', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '数量', PrintItem: 'InputQty', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强：售后-好机出库（二对三）
  goodPhoneTwoToThree:{
    mastInfo: {
      Code: '单号：',
      OutCompanyName: '发货公司：',
      OutWarehouse: '发货仓库：',
      CustomerName:'售点：'
    },
    Title: '好机出库二对三',
    TableData: [
      {PrintTitle: '商品编码', PrintItem: 'ProductCode', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '数量', PrintItem: 'InputQty', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强：售后-坏机出库（一代对工厂）
  badPhoneOneToFactory:{
    mastInfo: {
      Code: '单号：',
      InCompanyName: '工厂：',
      OutCompanyName: '发货公司：',
      OutWarehouse: '发货仓库：',
    },
    Title: '坏机出库一代',
    TableData: [
      {PrintTitle: '商品编码', PrintItem: 'ProductCode', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '数量', PrintItem: 'InputQty', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强：售后-坏机出库（二对一）
  badPhoneTwoToOne:{
    mastInfo: {
      Code: '单号：',
      OutCompanyName: '发货公司：',
      OutWarehouse: '发货仓库：',
      InCompanyName: '收货公司：',
      InWarehouse: '收货仓库：'
    },
    Title: '坏机出库二对一',
    TableData: [
      {PrintTitle: '商品编码', PrintItem: 'ProductCode', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '数量', PrintItem: 'InputQty', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 售后-坏机入库（三对二）
  badPhoneThreeToTwo:{
    mastInfo: {
      Code: '单号：',
      InCompanyName: '收货公司：',
      InWarehouse: '收货仓库：',
      CustomerName:'售点：'
    },
    Title: '坏机入库三对二',
    TableData: [
      {PrintTitle: '商品编码', PrintItem: 'ProductCode', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '数量', PrintItem: 'InputQty', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 售后-售后转仓单
  afterSaleTransfer:{
    mastInfo: {
      Code: '单号：',
      OutCompanyName: '转出公司：',
      OutWarehouse: '转出仓库：',
      InCompanyName: '转入公司：',
      InWarehouse: '转入仓库：'
    },
    Title: '售后转仓单',
    TableData: [
      {PrintTitle: '商品编码', PrintItem: 'ProductCode', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '数量', PrintItem: 'InputQty', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 售后-好机转坏机（一代）
  goodToBadOne:{
    mastInfo: {
      Code: '单号：',
      CompanyName: '公司：',
      StoreName: '仓库：'
    },
    Title: '好机转坏机一代',
    TableData: [
      {PrintTitle: '商品编码', PrintItem: 'ProductCode', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '数量', PrintItem: 'InputQty', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 售后-好机转坏机（二代）
  goodToBadTwo:{
    mastInfo: {
      Code: '单号：',
      CompanyName: '公司：',
      StoreName: '仓库：'
    },
    Title: '好机转坏机二代',
    TableData: [
      {PrintTitle: '商品编码', PrintItem: 'ProductCode', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '数量', PrintItem: 'InputQty', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 售后-好机转坏机（三代）
  goodToBadThree:{
    mastInfo: {
      Code: '单号：',
      CustomerName: '售点：'
    },
    Title: '好机转坏机三代',
    TableData: [
      {PrintTitle: '商品编码', PrintItem: 'ProductCode', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '数量', PrintItem: 'InputQty', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 售后-坏机转好机（一代）
  badToGoodOne:{
    mastInfo: {
      Code: '单号：',
      CompanyName: '公司：',
      StoreName: '仓库：'
    },
    Title: '坏机转好机一代',
    TableData: [
      {PrintTitle: '商品编码', PrintItem: 'ProductCode', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '数量', PrintItem: 'InputQty', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 售后-坏机转好机（二代）
  badToGoodTwo:{
    mastInfo: {
      Code: '单号：',
      CompanyName: '公司：',
      StoreName: '仓库：'
    },
    Title: '坏机转好机二代',
    TableData: [
      {PrintTitle: '商品编码', PrintItem: 'ProductCode', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '数量', PrintItem: 'InputQty', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 售后-坏机转好机（三代）
  badToGoodThree:{
    mastInfo: {
      Code: '单号：',
      CustomerName: '售点：'
    },
    Title: '坏机转好机三代',
    TableData: [
      {PrintTitle: '商品编码', PrintItem: 'ProductCode', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '数量', PrintItem: 'InputQty', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 借还机-业务借机出库（一代）
  BusinessOutOne:{
    mastInfo: {
      Code: '单号：',
      OutCompanyName: '发货公司：',
      OutWarehouse: '发货仓库：'
    },
    Title: '业务借机一代',
    TableData: [
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '串码', PrintItem: 'Imei', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '借机人', PrintItem: 'LenderName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '联系方式', PrintItem: 'LenderPhone', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 借还机-业务借机出库（二代）
  BusinessOutTwo:{
    mastInfo: {
      Code: '单号：',
      AgentName: '地区：',
      OutCompanyName: '发货公司：',
      OutWarehouse: '发货仓库：'
    },
    Title: '业务借机二代',
    TableData: [
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '串码', PrintItem: 'Imei', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '借机人', PrintItem: 'LenderName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '联系方式', PrintItem: 'LenderPhone', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 借还机-客情借机出库（一代）
  CustomerOutOne:{
    mastInfo: {
      Code: '单号：',
      OutCompanyName: '发货公司：',
      OutWarehouse: '发货仓库：'
    },
    Title: '客情借机一代',
    TableData: [
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '串码', PrintItem: 'Imei', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '借机人', PrintItem: 'LenderName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '联系方式', PrintItem: 'LenderPhone', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '客户', PrintItem: 'Customer', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '使用人', PrintItem: 'CustomerUser', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '使用人联系方式', PrintItem: 'CustomerPhone', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 借还机-客情借机出库（二代）
  CustomerOutTwo:{
    mastInfo: {
      Code: '单号：',
      AgentName: '地区：',
      OutCompanyName: '发货公司：',
      OutWarehouse: '发货仓库：'
    },
    Title: '客情借机二代',
    TableData: [
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '串码', PrintItem: 'Imei', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '借机人', PrintItem: 'LenderName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '联系方式', PrintItem: 'LenderPhone', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '客户', PrintItem: 'Customer', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '使用人', PrintItem: 'CustomerUser', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '使用人联系方式', PrintItem: 'CustomerPhone', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 借还机-导购借机出库
  ShoppingGuideOut:{
    mastInfo: {
      Code: '单号：',
      AgentName: '地区：',
      OutCompanyName: '发货公司：',
      OutWarehouse: '发货仓库：'
    },
    Title: '导购借机出库',
    TableData: [
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '串码', PrintItem: 'Imei', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '借机人', PrintItem: 'LenderName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '联系方式', PrintItem: 'LenderPhone', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '区域', PrintItem: 'District_Name', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '售点', PrintItem: 'SalePointName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 借还机-售点演示机出库
  SalePointOut:{
    mastInfo: {
      Code: '单号：',
      AgentName: '地区：'
    },
    Title: '售点演示机出库',
    TableData: [
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '串码', PrintItem: 'Imei', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '区域', PrintItem: 'District_Name', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '售点', PrintItem: 'SalePointName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '联系人', PrintItem: 'Lender', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '联系方式', PrintItem: 'LenderPhone', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 借还机-还机入库（一代）
  ReturnStoreOne:{
    mastInfo: {
      Code: '单号：'
    },
    Title: '还机入库一代',
    TableData: [
      {PrintTitle: '借机类型', PrintItem: 'LendType', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '串码', PrintItem: 'Imei', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '还机人', PrintItem: 'LenderName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '联系方式', PrintItem: 'LenderPhone', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '单据类型', PrintItem: 'BillId', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '还机原因', PrintItem: 'BackReasonName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 借还机-还机入库（二代）
  ReturnStoreTwo:{
    mastInfo: {
      Code: '单号：'
    },
    Title: '还机入库二代',
    TableData: [
      {PrintTitle: '借机类型', PrintItem: 'LendType', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '串码', PrintItem: 'Imei', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '还机人', PrintItem: 'LenderName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '联系方式', PrintItem: 'LenderPhone', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '售点名称', PrintItem: 'SalePointName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '单据类型', PrintItem: 'BillId', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '还机原因', PrintItem: 'BackReasonName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
  // 刘国强： 借还机-还机入库（三代）
  ReturnStoreThree:{
    mastInfo: {
      Code: '单号：'
    },
    Title: '还机入库三代',
    TableData: [
      {PrintTitle: '商品名称', PrintItem: 'ProductName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '串码', PrintItem: 'Imei', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '区域', PrintItem: 'District_Name', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '售点', PrintItem: 'SalePointName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '还机人', PrintItem: 'LenderName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '联系方式', PrintItem: 'LenderPhone', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '单据类型', PrintItem: 'BillId', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '还机原因', PrintItem: 'BackReasonName', Width: '100',IsPrint: true, IsSum: false},
      {PrintTitle: '备注', PrintItem: 'Remark', Width: '100',IsPrint: true, IsSum: false}
    ]
  },
};

export default [

  {Key: 'SOO', Value: PrintModel.OneTwoSale},
  {Key: 'SOI', Value: PrintModel.OneTwoOut},
  {Key: 'PIO', Value: PrintModel.purchaseWarehousing},
  {Key: 'ADI', Value: PrintModel.dispensingIn},
  {Key: 'ADO', Value: PrintModel.dispensingOut},
  {Key: 'POO', Value: PrintModel.factoryReturns},
  {Key: 'TMD', Value: PrintModel.terminalSalesModule},
  {Key: 'TMD', Value: PrintModel.bulkSales},
  {Key: 'TRD', Value: PrintModel.terminalReturn},
  {Key: 'TRO', Value: PrintModel.transferApplication},
  {Key: 'ROO', Value: PrintModel.OneTwoReturn},
  {Key: 'DOS', Value: PrintModel.generationsOrderThree},
  {Key: 'RGY', Value: PrintModel.goodPhoneFactoryToOne},
  {Key: 'STI', Value: PrintModel.TwoThreeOut},
  {Key: 'STT', Value: PrintModel.TwoThreeStepOut},
  {Key: 'STO', Value: PrintModel.TwoThreeSale},
  {Key: 'CYE', Value: PrintModel.goodPhoneOneToTwo},
  {Key: 'CYS', Value: PrintModel.goodPhoneOneToThree},
  {Key: 'CES', Value: PrintModel.goodPhoneTwoToThree},
  {Key: 'CYG', Value: PrintModel.badPhoneOneToFactory},
  {Key: 'CEY', Value: PrintModel.badPhoneTwoToOne},
  {Key: 'RSE', Value: PrintModel.badPhoneThreeToTwo},
  /* {Key: 'SHY', Value: PrintModel.afterSaleChangeOne},
  {Key: 'SHE', Value: PrintModel.afterSaleChangeTwo},
  {Key: 'SHS', Value: PrintModel.afterSaleChangeThree},勿删 */
  {Key: 'ZCD', Value: PrintModel.afterSaleTransfer},
  {Key: 'ZBY', Value: PrintModel.goodToBadOne},
  {Key: 'ZBE', Value: PrintModel.goodToBadTwo},
  {Key: 'ZBS', Value: PrintModel.goodToBadThree},
  {Key: 'ZHY', Value: PrintModel.badToGoodOne},
  {Key: 'ZHE', Value: PrintModel.badToGoodTwo},
  {Key: 'ZHS', Value: PrintModel.badToGoodThree},
  {Key: 'YWY', Value: PrintModel.BusinessOutOne},
  {Key: 'YWE', Value: PrintModel.BusinessOutTwo},
  {Key: 'KQY', Value: PrintModel.CustomerOutOne},
  {Key: 'KQE', Value: PrintModel.CustomerOutTwo},
  {Key: 'DGJ', Value: PrintModel.ShoppingGuideOut},
  {Key: 'SYJ', Value: PrintModel.SalePointOut},
  {Key: 'HJY', Value: PrintModel.ReturnStoreOne},
  {Key: 'HJE', Value: PrintModel.ReturnStoreTwo},
  {Key: 'HJS', Value: PrintModel.ReturnStoreThree},
  {Key: 'ROT', Value: PrintModel.ThreeTwoReturn},
  {Key: 'RIT', Value: PrintModel.ThreeTwoInReturn},
  {Key: 'RIO', Value: PrintModel.TwoOneInReturn},
  {Key: 'ROO', Value: PrintModel.TwoOneReturn},

]
