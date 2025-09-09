export const productCategories = [
  { id: 1, name: "光谱分析仪器", icon: "fa-wave-square" },
  { id: 2, name: "光纤光谱膜厚检测仪", icon: "fa-microscope" },
  { id: 3, name: "荧光光纤测温器", icon: "fa-thermometer-half" },
  { id: 4, name: "温振传感器", icon: "fa-wifi" }
];

export const featuredProducts = [
  {
    id: 1,
    name: "紧凑型1310波段光谱仪",
    category: "光谱分析仪器",
  image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/299923892738/attachment/产品图片新_20250826095830.png",
    features: [
      "基于自主创新理念研发的近红外高性能光谱分析设备",
      "低传输损耗窗口，优异的组织穿透性",
      "高采集频率与高分辨率，实时温补技术",
      "适用于多种复杂环境下的稳定、精准光谱数据采集",
      "支持医疗、农业、环境治理、工业等多场景应用"
    ],
    specifications: {
      "工作波段": "1310nm",
      "光谱带宽": "≥125nm",
      "分辨率(FWHM)": "优于0.35nm",
      "光谱像素数量": "512",
      "光谱最高采集频率": ">3kHz",
      "积分时间": "2~500000μs",
      "A/D位数": "16Bit",
      "温度漂移": "1 (max 3) pm/℃",
      "数据接口及协议": "RJ45/UDP",
      "光学接口": "FC/APC",
      "工作温度": "0~50℃",
      "重量": "1.28kg",
      "尺寸": "154×91×41mm"
    },
    applicationScenarios: ["医疗场景", "农业场景", "环境治理", "工业场景", "科研实验"],
    technicalDrawing: "https://lf-code-agent.coze.cn/obj/x-ai-cn/299923892738/attachment/产品参数_20250826094328.png",
    manualImage: "https://lf-code-agent.coze.cn/obj/x-ai-cn/299923892738/attachment/image_20250905100534.png"
  },
  {
    id: 2,
    name: "光纤光谱膜厚检测仪(MH-1310)",
    category: "光纤光谱膜厚检测仪",
  image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/299923892738/attachment/image_20250905100323.png",
    features: [
      "超高精度 - 微米级测厚，纳米级误差",
      "极速响应 - 光谱采集速率可达17kHz",
      "数据可视化管理 - 全过程监控与数据分析",
      "定制化开发 - 支持半导体制造、光伏产业等多领域应用"
    ],
    specifications: {
      "测量厚度": "10~500μm",
      "光源工作波段": "1310nm",
      "光功率": "10mW",
      "测量精度": "0.1μm",
      "测量重复性": "0.08μm",
      "测量时间": "200us~10ms",
      "通信接口": "网口",
      "功耗": "7W",
      "工作温度": "0℃~50℃",
      "尺寸": "290*245*60mm",
      "供电": "220V, 50/60Hz"
    },
    applicationScenarios: ["半导体制造", "光伏产业", "晶圆加工", "薄膜沉积监控", "精密光学元件生产"],
    technicalDrawing: "https://lf-code-agent.coze.cn/obj/x-ai-cn/299923892738/attachment/晶圆测厚仪参数_20250826101655.png",
    manualImage: "https://lf-code-agent.coze.cn/obj/x-ai-cn/299923892738/attachment/image_20250905100519.png"
  },
  {
    id: 3,
    name: "荧光光纤测温传感器",
    category: "荧光光纤测温器",
    image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/299923892738/attachment/image_20250905095532.png",
    features: [
      "基于荧光寿命衰减原理的高精度温度监测",
      "天然电绝缘、抗电磁干扰、耐腐蚀",
      "非接触、高精度、实时在线监测",
      "多通道同步监测，支持12个测点同时采集",
      "适用于高压、强电磁、高危环境"
    ],
    specifications: {
      "测温范围": "-50℃ ~ 200℃",
      "测量精度": "±1.0℃",
      "采样精度": "0.1℃",
      "响应时间": "≤1s",
      "通道数量": "3/6/9/12通道可选",
      "采样频率": "1Hz",
      "通信接口": "网口/RS485/光纤输出",
      "功耗": "≤5W",
      "工作温度": "-40℃ ~ 85℃",
      "防护等级": "IP67 (探头)"
    },
    applicationScenarios: ["电力设备", "医疗微波治疗", "工业过程控制", "科研极端环境", "油气管道", "化工冶炼"],
    technicalDrawing: "https://lf-code-agent.coze.cn/obj/x-ai-cn/299923892738/attachment/image_20250905095532.png",
    manualImage: "https://lf-code-agent.coze.cn/obj/x-ai-cn/299923892738/attachment/image_20250905095532.png"
  },
  {
    id: 4,
    name: "LoRa无线智能温振复合传感器",
    category: "温振传感器",
    image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/299923892738/attachment/image_20250905095546.png",
    features: [
      "振动与温度监测于一体的智能感知设备",
      "采用LoRa无线通信技术，低功耗设计",
      "集成多轴振动传感与高精度温度测量",
      "边缘计算能力，本地特征提取与故障预警",
      "IP67防护等级，适应潮湿、腐蚀性环境"
    ],
    specifications: {
      "振动测量": "单轴/X、Y、Z三轴可选",
      "量程": "±50g (pk)",
      "灵敏度": "50mV/g (±10%)",
      "采样频率": "7.15kHz，12bit精度",
      "温度测量": "-40℃ ~ 85℃",
      "传输距离": "空旷环境下最远5km",
      "功耗": "待机 <10μA，工作 <0.15mA",
      "通信方式": "LoRa",
      "防护等级": "IP67",
      "安装方式": "磁吸/胶粘可选"
    },
    applicationScenarios: ["风力发电", "水力发电", "轨道交通", "桥梁建筑", "矿山机械", "港口船舶"],
    technicalDrawing: "https://lf-code-agent.coze.cn/obj/x-ai-cn/299923892738/attachment/image_20250905095546.png",
    manualImage: "https://lf-code-agent.coze.cn/obj/x-ai-cn/299923892738/attachment/image_20250905095546.png"
  }
];