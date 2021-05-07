export const modalOpt = [
  {
    title: "乙方信息",
    type: "form",
    fields: [
      {
        label: "乙方企业名称",
        key: "customerName",
        required: true,
        disabled: false,
        type: "syncSelect",
        showblock: false,
        options: {
          S: "S"
        }
      },
      {
        label: "法定代表人",
        key: "legalPerson",
        required: true,
        maxLength: 20,
        showblock: false
      },
      {
        label: "品牌",
        key: "brandName",
        required: true,
        maxLength: 100,
        showblock: false
      },
      {
        label: "主要生产产品",
        key: "mainProduct",
        required: true,
        maxLength: 100,
        showblock: false
      },
      {
        label: "地址",
        key: "customerAddress",
        required: true,
        maxLength: 100,
        showblock: false
      },
      {
        label: "联系人（乙方）",
        key: "customerLinkman",
        required: true,
        maxLength: 20,
        showblock: false
      },
      {
        label: "电话（乙方）",
        key: "customerPhone",
        required: true,
        showblock: false,
        maxLength: 20,
        type: "phone"
      }, // type: 'phone'用于手机号校验
      {
        label: "地址（乙方）",
        key: "customerRealAddress",
        required: true,
        maxLength: 100,
        showblock: false
      },
      {
        label: "邮箱（乙方）",
        key: "customerEmail",
        type: "email",
        required: false,
        maxLength: 100,
        showblock: false
      },
      {
        label: "营业执照",
        key: "businessLicenseOld",
        information: "fileName",
        type: "upload",
        required: true,
        showblock: true
      }
    ]
  },
  {
    title: "甲方信息",
    type: "form",
    header: true,
    show: true,
    fields: [
      {
        label: "收款账户开户名",
        key: "accountName",
        type: "blurInput",
        maxLength: 40,
        showblock: false
      },
      {
        label: "收款开户银行",
        key: "accountBankName",
        disabled: true,
        showblock: false,
        placeholder: "-"
      },
      {
        label: "收款开户账号",
        key: "accountBankNo",
        disabled: true,
        maxLength: 40,
        showblock: false,
        placeholder: "-"
      },
      {
        label: "联系人（甲方）",
        key: "linkman",
        required: true,
        maxLength: 20,
        showblock: false
      },
      {
        label: "电话（甲方）",
        key: "phone",
        required: true,
        showblock: false,
        maxLength: 11,
        type: "phone"
      }, // type: 'phone'用于手机号校验
      {
        label: "地址（甲方）",
        key: "address",
        required: true,
        maxLength: 100,
        showblock: false
      },
      {
        label: "邮箱（甲方）",
        key: "email",
        type: "email",
        required: true,
        maxLength: 100,
        showblock: false
      }
    ]
  },
  {
    title: "签约信息",
    type: "form",
    fields: [
      {
        label: "是否补录",
        key: "Supplement",
        type: "selectChange",
        showblock: false,
        options: {
          10: "是",
          20: "否"
        }
      },
      {
        label: "签约时间",
        key: "signDate",
        required: true,
        type: "date",
        showblock: false,
        options: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        }
      },
      {
        label: "产品服务包",
        key: "productServiceName",
        required: true,
        type: "changeSever1",
        showblock: false
      },
      {
        label: "合同期限（年）",
        key: "buyingYears",
        required: true,
        type: "number",
        showblock: false,
        disabled: true,
        min: 1,
        max: 6
      },
      {
        label: "合同期限起",
        key: "startDate",
        type: "date",
        showblock: false
      },
      {
        label: "合同期限止",
        key: "endDate",
        required: false,
        type: "date",
        disabled: true,
        showblock: false,
        placeholder: "-"
      },
      {
        label: "展位个数",
        key: "productServiceNum",
        type: "number",
        max: 10,
        min: 1,
        showblock: false,
        disabled: false
      }
    ]
  },
  {
    title: "",
    type: "component",
    component: "VisitingMemberList", // 组件名称
    tableFields: [
      { prop: "rights", width: "110", label: "权益包" },
      { prop: "rightsDetail", width: "110", label: "权益" },
      { prop: "plate", width: "80", label: "板块" },
      { prop: "business", width: "100", label: "业务" }, // 业务+数量+板块
      { prop: "price", width: "80", label: "市场价" },
      { prop: "num", width: "100", label: "数量" }
    ]
  },
  {
    title: "",
    type: "component",
    component: "RightsInterests", // 组件名称
    tableFields: [
      { prop: "rlsPositionDesc", width: "110", label: "权益内容" },
      { prop: "rightNum", width: "110", label: "数量" },
      { prop: "unitTime", width: "80", label: "有效期" }
    ]
  },
  {
    title: "",
    type: "component",
    component: "Chanting", // 组件名称
    tableFields: [
      { prop: "boothCode", width: "110", label: "展位编号" },
      { prop: "boothFloor", width: "80", label: "楼层" },
      { prop: "boothRegion", width: "100", label: "区域" },
      { prop: "boothArea", width: "80", label: "展位面积" }
    ]
  },
  {
    title: "",
    type: "form",
    fields: [
      {
        label: "合同金额",
        key: "amount",
        disabled: true,
        maxLength: 40,
        showblock: false,
        placeholder: "-"
      },
      {
        label: "付款方式",
        key: "payType",
        required: true,
        type: "select",
        showblock: false,
        options: {
          10: "一次性支付"
        }
      },
      {
        label: "应付金额",
        key: "finalAmount",
        max: 9999999999,
        required: true,
        type: "number",
        min: 0,
        showblock: false
      }
    ]
  },
  {
    title: "合同扫描件",
    type: "form",
    fields: [
      {
        label: "上传合同",
        key: "attachmentOld",
        information: "fileNameConcat",
        type: "attachment",
        required: true,
        showblock: true
      }
    ]
  },
  {
    title: "其他信息",
    type: "form",
    fields: [
      {
        label: "签订人",
        key: "signPerson",
        disabled: true,
        showblock: false,
        placeholder: "-"
      },
      {
        label: "签订人部门",
        key: "signDepartment",
        disabled: true,
        showblock: false,
        placeholder: "-"
      }
      // { label: '协同签订人', key: 'cooperateSignPerson', disabled: true, showblock: false, placeholder: '-' },
      // { label: '协同签订人部门', key: 'cooperateSignDepartment', disabled: true, showblock: false, placeholder: '-' }
    ]
  }
];

export const edit = {
  title: "",
  type: "form",
  fields: [
    {
      label: "合同编号",
      key: "contractCode",
      required: true,
      disabled: true,
      maxLength: 40,
      showblock: false
    }
  ]
};
