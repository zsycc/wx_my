// cinema/cinema.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../img/577067_170904094807_1.jpg',
      '../../img/110923094526455623.jpg',
      '../../img/ul0505-0290.jpg'
    ],
    json: {
      "brand": {
        "name": "品牌",
        "subItems": [
          {
            "count": 79,
            "id": -1,
            "name": "全部"
          },
          {
            "count": 4,
            "id": 102642,
            "name": "万达影城"
          },
          {
            "count": 3,
            "id": 1079568,
            "name": "金逸影城"
          },
          {
            "count": 3,
            "id": 26497,
            "name": "今世界影城"
          },
          {
            "count": 3,
            "id": 24745,
            "name": "橙天嘉禾影城"
          },
          {
            "count": 3,
            "id": 1319936,
            "name": "恒大影城"
          },
          {
            "count": 3,
            "id": 26172,
            "name": "华臣影城"
          },
          {
            "count": 2,
            "id": 383854,
            "name": "大商影城"
          },
          {
            "count": 2,
            "id": 30032,
            "name": "星美国际影城"
          },
          {
            "count": 2,
            "id": 292030,
            "name": "卢米埃影城"
          },
          {
            "count": 2,
            "id": 2020418,
            "name": "CGV影城"
          },
          {
            "count": 2,
            "id": 26045,
            "name": "横店电影城"
          },
          {
            "count": 1,
            "id": 27617,
            "name": "美嘉欢乐影城"
          },
          {
            "count": 1,
            "id": 384262,
            "name": "大地影院"
          },
          {
            "count": 1,
            "id": 28741,
            "name": "世茂国际影城"
          },
          {
            "count": 1,
            "id": 30053,
            "name": "幸福蓝海国际影城"
          },
          {
            "count": 1,
            "id": 24525,
            "name": "比高电影城"
          },
          {
            "count": 1,
            "id": 28975,
            "name": "太平洋电影城"
          },
          {
            "count": 1,
            "id": 275830,
            "name": "华谊兄弟影院"
          },
          {
            "count": 1,
            "id": 30227,
            "name": "耀莱成龙国际影城"
          },
          {
            "count": 1,
            "id": 29462,
            "name": "沃美影城"
          },
          {
            "count": 1,
            "id": 2880988,
            "name": "SFC上影影城"
          },
          {
            "count": 1,
            "id": 29880,
            "name": "新东北影城"
          },
          {
            "count": 39,
            "id": 0,
            "name": "其他"
          }
        ]
      },
      "district": {
        "name": "行政区",
        "subItems": [
          {
            "count": 79,
            "id": -1,
            "name": "全部"
          },
          {
            "count": 13,
            "id": 121,
            "name": "沈河区",
            "subItems": [
              {
                "count": 13,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 4,
                "id": 915,
                "name": "北站/市府"
              },
              {
                "count": 2,
                "id": 14538,
                "name": "青年大街"
              },
              {
                "count": 1,
                "id": 918,
                "name": "文艺路/文化路"
              },
              {
                "count": 1,
                "id": 14537,
                "name": "南塔"
              },
              {
                "count": 1,
                "id": 6612,
                "name": "长青街"
              }
            ]
          },
          {
            "count": 12,
            "id": 120,
            "name": "和平区",
            "subItems": [
              {
                "count": 12,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 2,
                "id": 26431,
                "name": "万达广场"
              },
              {
                "count": 2,
                "id": 6604,
                "name": "三好街"
              },
              {
                "count": 1,
                "id": 26429,
                "name": "中山广场（医大一院）"
              },
              {
                "count": 1,
                "id": 7395,
                "name": "长白岛"
              },
              {
                "count": 1,
                "id": 26407,
                "name": "太原街"
              },
              {
                "count": 1,
                "id": 912,
                "name": "南市/马路湾"
              },
              {
                "count": 1,
                "id": 19557,
                "name": "沈阳站"
              },
              {
                "count": 1,
                "id": 6603,
                "name": "彩电塔"
              },
              {
                "count": 1,
                "id": 26432,
                "name": "中华路"
              }
            ]
          },
          {
            "count": 11,
            "id": 122,
            "name": "铁西区",
            "subItems": [
              {
                "count": 11,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 9032,
                "name": "北一路万达"
              },
              {
                "count": 1,
                "id": 26616,
                "name": "财富广场"
              },
              {
                "count": 1,
                "id": 27290,
                "name": "沈辽路万达"
              },
              {
                "count": 1,
                "id": 26449,
                "name": "工人文化宫"
              },
              {
                "count": 1,
                "id": 26447,
                "name": "兴隆大都汇"
              },
              {
                "count": 1,
                "id": 26443,
                "name": "兴隆大天地"
              },
              {
                "count": 1,
                "id": 26436,
                "name": "云峰街"
              },
              {
                "count": 1,
                "id": 26437,
                "name": "星摩尔"
              },
              {
                "count": 1,
                "id": 26438,
                "name": "铁西广场"
              },
              {
                "count": 1,
                "id": 26434,
                "name": "兴工北街"
              }
            ]
          },
          {
            "count": 9,
            "id": 2449,
            "name": "浑南区",
            "subItems": [
              {
                "count": 9,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 3,
                "id": 6611,
                "name": "奥体中心"
              },
              {
                "count": 1,
                "id": 14555,
                "name": "东陵公园"
              },
              {
                "count": 1,
                "id": 35655,
                "name": "沈阳建筑大学"
              }
            ]
          },
          {
            "count": 8,
            "id": 123,
            "name": "大东区",
            "subItems": [
              {
                "count": 8,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 3,
                "id": 6609,
                "name": "东中街"
              },
              {
                "count": 2,
                "id": 37875,
                "name": "龙之梦"
              },
              {
                "count": 1,
                "id": 925,
                "name": "东站"
              }
            ]
          },
          {
            "count": 7,
            "id": 125,
            "name": "于洪区",
            "subItems": [
              {
                "count": 7,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 14529,
                "name": "国奥现代城"
              },
              {
                "count": 1,
                "id": 14522,
                "name": "于洪广场"
              },
              {
                "count": 1,
                "id": 26452,
                "name": "碧桂园银河城"
              }
            ]
          },
          {
            "count": 6,
            "id": 2450,
            "name": "沈北新区",
            "subItems": [
              {
                "count": 6,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 2,
                "id": 14518,
                "name": "正良"
              },
              {
                "count": 1,
                "id": 30777,
                "name": "虎石台"
              },
              {
                "count": 1,
                "id": 14519,
                "name": "道义"
              }
            ]
          },
          {
            "count": 4,
            "id": 124,
            "name": "皇姑区",
            "subItems": [
              {
                "count": 4,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 926,
                "name": "北陵"
              },
              {
                "count": 1,
                "id": 14532,
                "name": "北行"
              },
              {
                "count": 1,
                "id": 1080,
                "name": "塔湾"
              },
              {
                "count": 1,
                "id": 6620,
                "name": "龙江广场"
              }
            ]
          },
          {
            "count": 3,
            "id": 2448,
            "name": "苏家屯区",
            "subItems": [
              {
                "count": 3,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 35653,
                "name": "苏家屯区政府"
              }
            ]
          },
          {
            "count": 2,
            "id": 2451,
            "name": "新民市"
          },
          {
            "count": 2,
            "id": 2454,
            "name": "法库县",
            "subItems": [
              {
                "count": 2,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 15975,
                "name": "幸福花园"
              }
            ]
          },
          {
            "count": 1,
            "id": 2452,
            "name": "辽中县"
          },
          {
            "count": 1,
            "id": 2453,
            "name": "康平县",
            "subItems": [
              {
                "count": 1,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 15986,
                "name": "中心街"
              }
            ]
          }
        ]
      },
      "hallType": {
        "name": "特殊厅",
        "subItems": [
          {
            "count": 0,
            "id": -1,
            "name": "全部"
          },
          {
            "count": 0,
            "id": 2,
            "name": "IMAX厅"
          },
          {
            "count": 0,
            "id": 3,
            "name": "CGS中国巨幕厅"
          },
          {
            "count": 0,
            "id": 9,
            "name": "杜比全景声厅"
          },
          {
            "count": 0,
            "id": 10,
            "name": "RealD厅"
          },
          {
            "count": 0,
            "id": 11,
            "name": "RealD 6FL厅"
          },
          {
            "count": 0,
            "id": 4,
            "name": "4DX厅"
          },
          {
            "count": 0,
            "id": 25,
            "name": "DTS:X 临境音厅"
          },
          {
            "count": 0,
            "id": 24,
            "name": "儿童厅"
          },
          {
            "count": 0,
            "id": 8,
            "name": "4K厅"
          },
          {
            "count": 0,
            "id": 6,
            "name": "巨幕厅"
          }
        ]
      },
      "service": {
        "name": "服务",
        "subItems": [
          {
            "count": 79,
            "id": -1,
            "name": "全部"
          },
          {
            "count": 61,
            "id": 4,
            "name": "会员卡"
          },
          {
            "count": 19,
            "id": 3,
            "name": "可改签"
          },
          {
            "count": 18,
            "id": 2,
            "name": "可退票"
          }
        ]
      },
      "subway": {
        "name": "地铁",
        "subItems": [
          {
            "count": 79,
            "id": -1,
            "name": "全部"
          },
          {
            "count": 37,
            "id": 64,
            "name": "1号线",
            "subItems": [
              {
                "count": 37,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 7,
                "id": 1140,
                "name": "太原街"
              },
              {
                "count": 6,
                "id": 1144,
                "name": "中街"
              },
              {
                "count": 6,
                "id": 1139,
                "name": "沈阳站"
              },
              {
                "count": 5,
                "id": 1145,
                "name": "东中街"
              },
              {
                "count": 2,
                "id": 1146,
                "name": "滂江街"
              },
              {
                "count": 2,
                "id": 1138,
                "name": "云峰北街"
              },
              {
                "count": 1,
                "id": 1135,
                "name": "启工街"
              },
              {
                "count": 1,
                "id": 1132,
                "name": "于洪广场"
              },
              {
                "count": 1,
                "id": 1133,
                "name": "迎宾路"
              },
              {
                "count": 1,
                "id": 1147,
                "name": "黎明广场"
              },
              {
                "count": 1,
                "id": 1143,
                "name": "怀远门"
              },
              {
                "count": 1,
                "id": 1142,
                "name": "青年大街"
              },
              {
                "count": 1,
                "id": 1141,
                "name": "南市场"
              },
              {
                "count": 1,
                "id": 1137,
                "name": "铁西广场"
              },
              {
                "count": 1,
                "id": 1136,
                "name": "保工街"
              }
            ]
          },
          {
            "count": 33,
            "id": 65,
            "name": "2号线",
            "subItems": [
              {
                "count": 33,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 5,
                "id": 1155,
                "name": "工业展览馆"
              },
              {
                "count": 5,
                "id": 1158,
                "name": "市府广场"
              },
              {
                "count": 4,
                "id": 1154,
                "name": "市图书馆"
              },
              {
                "count": 3,
                "id": 1152,
                "name": "奥体中心"
              },
              {
                "count": 3,
                "id": 1159,
                "name": "金融中心"
              },
              {
                "count": 3,
                "id": 1160,
                "name": "沈阳北站"
              },
              {
                "count": 3,
                "id": 1151,
                "name": "营盘街"
              },
              {
                "count": 2,
                "id": 1161,
                "name": "岐山路"
              },
              {
                "count": 1,
                "id": 1157,
                "name": "青年大街"
              },
              {
                "count": 1,
                "id": 1156,
                "name": "青年公园"
              },
              {
                "count": 1,
                "id": 1162,
                "name": "中医药大学"
              },
              {
                "count": 1,
                "id": 1166,
                "name": "三台子"
              },
              {
                "count": 1,
                "id": 1669,
                "name": "航空航天大学"
              }
            ]
          }
        ]
      },
      "timeRanges": {
        "name": "时段",
        "subItems": [
          {
            "count": 0,
            "id": 100000000,
            "name": "不限时段"
          },
          {
            "count": 0,
            "id": 100000900,
            "name": "9点以前"
          },
          {
            "count": 0,
            "id": 109001100,
            "name": "9-11点"
          },
          {
            "count": 0,
            "id": 111001300,
            "name": "11-13点"
          },
          {
            "count": 0,
            "id": 113001500,
            "name": "13-15点"
          },
          {
            "count": 0,
            "id": 115001700,
            "name": "15-17点"
          },
          {
            "count": 0,
            "id": 117001900,
            "name": "17-19点"
          },
          {
            "count": 0,
            "id": 119002100,
            "name": "19-21点"
          },
          {
            "count": 0,
            "id": 121002300,
            "name": "21-23点"
          },
          {
            "count": 0,
            "id": 123002359,
            "name": "23点以后"
          }
        ]
      }
    },
    obj:// 大连
      {
        "cinemas": [
          {
            "id": 6151,
            "mark": 0,
            "nm": "万达国际影城(高新店)",
            "sellPrice": "34",
            "addr": "甘井子区高新园区黄浦路500号万达广场4层",
            "distance": "700m",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallType": [
                "IMAX厅",
                "RealD 6FL厅",
                "4DX厅",
                "儿童厅"
              ],
              "hallTypeVOList": [
                {
                  "name": "IMAX厅",
                  "url": ""
                },
                {
                  "name": "RealD 6FL厅",
                  "url": ""
                },
                {
                  "name": "4DX厅",
                  "url": ""
                },
                {
                  "name": "儿童厅",
                  "url": ""
                }
              ],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {}
          },
          {
            "id": 12680,
            "mark": 0,
            "nm": "米高梅国际影城(高新店)",
            "sellPrice": "28",
            "addr": "甘井子区高新园区黄浦路517号（锦辉购物广场五楼）（海创国际大厦附近）",
            "distance": "800m",
            "tag": {
              "allowRefund": 1,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 1,
              "hallType": [
                "4D厅"
              ],
              "hallTypeVOList": [
                {
                  "name": "4D厅",
                  "url": ""
                }
              ],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {
              "cardPromotionTag": "开卡特惠，首单2张立减10元"
            }
          },
          {
            "id": 2381,
            "mark": 0,
            "nm": "中影华臣影城(软件园店)",
            "sellPrice": "23",
            "addr": "沙河口区数码路南段13号锦辉商城东财书香园店2楼（近弘基书香园）",
            "distance": "2.6km",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallTypeVOList": [],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {
              "cardPromotionTag": "开卡特惠，首单2张立减10元"
            }
          },
          {
            "id": 17063,
            "mark": 0,
            "nm": "中影星美国际影城(软件园店)",
            "sellPrice": "23",
            "addr": "沙河口区高新园区软件园路1A-12号",
            "distance": "3.2km",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallType": [
                "杜比全景声厅"
              ],
              "hallTypeVOList": [
                {
                  "name": "杜比全景声厅",
                  "url": ""
                }
              ],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {
              "cardPromotionTag": "开卡特惠，首单2张立减10元"
            }
          },
          {
            "id": 5578,
            "mark": 0,
            "nm": "中影华臣影城(黑石礁富丽庭店)",
            "sellPrice": "23",
            "addr": "沙河口区中山路673号富丽庭生活广场3F",
            "distance": "3.3km",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallTypeVOList": [],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {
              "cardPromotionTag": "开卡特惠，首单2张立减10元"
            }
          },
          {
            "id": 15420,
            "mark": 0,
            "nm": "东融国际影城(中心店)",
            "sellPrice": "23",
            "addr": "沙河口区西南路479号中心书城4F（熟食品交易中心）",
            "distance": "6km",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallType": [
                "DTS:X 临境音厅"
              ],
              "hallTypeVOList": [
                {
                  "name": "DTS:X 临境音厅",
                  "url": ""
                }
              ],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {
              "cardPromotionTag": "开卡特惠，首单2张立减8元"
            }
          },
          {
            "id": 1503,
            "mark": 0,
            "nm": "万达国际影城(和平店)",
            "sellPrice": "39",
            "addr": "沙河口区高尔基路695-699号和平广场4层",
            "distance": "6.7km",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallType": [
                "杜比全景声厅",
                "Dolby Cinema厅",
                "4DX厅",
                "儿童厅",
                "4D厅"
              ],
              "hallTypeVOList": [
                {
                  "name": "杜比全景声厅",
                  "url": ""
                },
                {
                  "name": "Dolby Cinema厅",
                  "url": ""
                },
                {
                  "name": "4DX厅",
                  "url": ""
                },
                {
                  "name": "儿童厅",
                  "url": ""
                },
                {
                  "name": "4D厅",
                  "url": ""
                }
              ],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {
              "cardPromotionTag": "开卡特惠，首单2张立减14元"
            }
          },
          {
            "id": 2065,
            "mark": 0,
            "nm": "华美影城",
            "sellPrice": "23",
            "addr": "沙河口区黄河路1105号马栏广场逸彩城3楼（新玛特）",
            "distance": "7km",
            "tag": {
              "allowRefund": 1,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 1,
              "hallTypeVOList": [],
              "sell": 1,
              "snack": 1,
              "vipTag": "会员卡"
            },
            "promotion": {
              "cardPromotionTag": "开卡特惠，首单2张立减14元"
            }
          },
          {
            "id": 25107,
            "mark": 0,
            "nm": "北联中体国际影城",
            "sellPrice": "23",
            "addr": "甘井子区柳韵园1-13号3层",
            "distance": "7.3km",
            "tag": {
              "allowRefund": 1,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 1,
              "hallTypeVOList": [],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {
              "cardPromotionTag": "开卡特惠，首单2张立减10元"
            }
          },
          {
            "id": 1500,
            "mark": 0,
            "nm": "中影华臣影城(西安路店)",
            "sellPrice": "23",
            "addr": "沙河口区西安路123号天兴罗斯福国际中心4F",
            "distance": "7.9km",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallType": [
                "RealD 6FL厅"
              ],
              "hallTypeVOList": [
                {
                  "name": "RealD 6FL厅",
                  "url": ""
                }
              ],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {
              "cardPromotionTag": "开卡特惠，首单2张立减6元"
            }
          },
          {
            "id": 14095,
            "mark": 0,
            "nm": "博纳国际影城(中央大道店)",
            "sellPrice": "26",
            "addr": "沙河口区西安路103号中央大道旅游购物中心5层",
            "distance": "8km",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallType": [
                "IMAX厅",
                "4D厅"
              ],
              "hallTypeVOList": [
                {
                  "name": "IMAX厅",
                  "url": ""
                },
                {
                  "name": "4D厅",
                  "url": ""
                }
              ],
              "sell": 1,
              "snack": 1
            },
            "promotion": {}
          },
          {
            "id": 1494,
            "mark": 0,
            "nm": "金逸影城(福佳店)",
            "sellPrice": "25",
            "addr": "沙河口区西安路99号福佳新天地5楼",
            "distance": "8.2km",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallType": [
                "杜比全景声厅"
              ],
              "hallTypeVOList": [
                {
                  "name": "杜比全景声厅",
                  "url": ""
                }
              ],
              "sell": 1,
              "snack": 0,
              "vipTag": "折扣卡"
            },
            "promotion": {}
          },
          {
            "id": 15649,
            "mark": 0,
            "nm": "百丽宫(LUXE巨幕)影城恒隆广场店",
            "sellPrice": "34",
            "addr": "西岗区五四路66号恒隆广场4层",
            "distance": "8.8km",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallType": [
                "RealD厅",
                "LUXE巨幕厅"
              ],
              "hallTypeVOList": [
                {
                  "name": "RealD厅",
                  "url": ""
                },
                {
                  "name": "LUXE巨幕厅",
                  "url": ""
                }
              ],
              "sell": 1,
              "snack": 1
            },
            "promotion": {}
          },
          {
            "id": 1501,
            "mark": 0,
            "nm": "万达国际影城(华府店)",
            "sellPrice": "34",
            "addr": "西岗区中山路281号悦荟广场3层（近长春路）",
            "distance": "9km",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallType": [
                "IMAX厅",
                "RealD 6FL厅",
                "儿童厅",
                "4D厅"
              ],
              "hallTypeVOList": [
                {
                  "name": "IMAX厅",
                  "url": ""
                },
                {
                  "name": "RealD 6FL厅",
                  "url": ""
                },
                {
                  "name": "儿童厅",
                  "url": ""
                },
                {
                  "name": "4D厅",
                  "url": ""
                }
              ],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {}
          },
          {
            "id": 24114,
            "mark": 0,
            "nm": "万达影城(甘井子万达广场店)",
            "sellPrice": "39",
            "addr": "甘井子区虹韵路6号万达广场2F万达影城",
            "distance": "9.6km",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallType": [
                "IMAX厅",
                "4DX厅",
                "儿童厅"
              ],
              "hallTypeVOList": [
                {
                  "name": "IMAX厅",
                  "url": ""
                },
                {
                  "name": "4DX厅",
                  "url": ""
                },
                {
                  "name": "儿童厅",
                  "url": ""
                }
              ],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {
              "cardPromotionTag": "开卡特惠，首单2张立减14元"
            }
          },
          {
            "id": 16676,
            "mark": 0,
            "nm": "恒大影城(帝景店)",
            "sellPrice": "26",
            "addr": "沙河口区南松路恒大帝景西侧，恒大影城3楼",
            "distance": "9.7km",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallType": [],
              "hallTypeVOList": [],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {
              "cardPromotionTag": "开卡特惠，首单2张立减8元"
            }
          },
          {
            "id": 25506,
            "mark": 0,
            "nm": "华夏为莱影城",
            "sellPrice": "23",
            "addr": "甘井子区第五郡亿家缘广场3号楼2层",
            "distance": "10.1km",
            "tag": {
              "allowRefund": 1,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 1,
              "hallType": [
                "4K厅"
              ],
              "hallTypeVOList": [
                {
                  "name": "4K厅",
                  "url": ""
                }
              ],
              "sell": 1,
              "snack": 0,
              "vipTag": "折扣卡"
            },
            "promotion": {
              "cardPromotionTag": "开卡特惠，首单2张立减20元"
            }
          },
          {
            "id": 14511,
            "mark": 0,
            "nm": "SFC上影影城(百年港湾IMAX店)",
            "sellPrice": "29",
            "addr": "西岗区香炉礁百年港湾奥特莱斯A2区2楼",
            "distance": "10.5km",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallType": [
                "IMAX厅"
              ],
              "hallTypeVOList": [
                {
                  "name": "IMAX厅",
                  "url": ""
                }
              ],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {
              "cardPromotionTag": "限时¥25.8促销开卡，首单更优惠"
            }
          },
          {
            "id": 1652,
            "mark": 0,
            "nm": "大地影院(新华绿洲店)",
            "sellPrice": "28.9",
            "addr": "甘井子区西南路122-130号新玛特新华店4楼东南侧",
            "distance": "10.8km",
            "tag": {
              "allowRefund": 1,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 1,
              "hallTypeVOList": [],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {
              "cardPromotionTag": "限时¥19.9促销开卡，首单更优惠"
            }
          },
          {
            "id": 9448,
            "mark": 0,
            "nm": "万达国际影城(机场店)",
            "sellPrice": "33",
            "addr": "甘井子区张前路211号乐都汇购物中心F4L008",
            "distance": "10.9km",
            "tag": {
              "allowRefund": 0,
              "buyout": 0,
              "cityCardTag": 0,
              "deal": 0,
              "endorse": 0,
              "hallType": [
                "4DX厅",
                "儿童厅"
              ],
              "hallTypeVOList": [
                {
                  "name": "4DX厅",
                  "url": ""
                },
                {
                  "name": "儿童厅",
                  "url": ""
                }
              ],
              "sell": 1,
              "snack": 1,
              "vipTag": "折扣卡"
            },
            "promotion": {}
          }
        ],
        "ct_pois": [
          {
            "ct_poi": "936879945111165696_a6151_c0",
            "poiid": 2496123
          },
          {
            "ct_poi": "936879945111165696_a12680_c1",
            "poiid": 40317532
          },
          {
            "ct_poi": "936879945111165696_a2381_c2",
            "poiid": 1543598
          },
          {
            "ct_poi": "936879945111165696_a17063_c3",
            "poiid": 151125927
          },
          {
            "ct_poi": "936879945111165696_a5578_c4",
            "poiid": 2389567
          },
          {
            "ct_poi": "936879945111165696_a15420_c5",
            "poiid": 94309505
          },
          {
            "ct_poi": "936879945111165696_a1503_c6",
            "poiid": 1027628
          },
          {
            "ct_poi": "936879945111165696_a2065_c7",
            "poiid": 1465630
          },
          {
            "ct_poi": "936879945111165696_a25107_c8",
            "poiid": 165628510
          },
          {
            "ct_poi": "936879945111165696_a1500_c9",
            "poiid": 1550082
          },
          {
            "ct_poi": "936879945111165696_a14095_c10",
            "poiid": 79932659
          },
          {
            "ct_poi": "936879945111165696_a1494_c11",
            "poiid": 1566826
          },
          {
            "ct_poi": "936879945111165696_a15649_c12",
            "poiid": 71219253
          },
          {
            "ct_poi": "936879945111165696_a1501_c13",
            "poiid": 1560445
          },
          {
            "ct_poi": "936879945111165696_a24114_c14",
            "poiid": 162916354
          },
          {
            "ct_poi": "936879945111165696_a16676_c15",
            "poiid": 139962919
          },
          {
            "ct_poi": "936879945111165696_a25506_c16",
            "poiid": 179294151
          },
          {
            "ct_poi": "936879945111165696_a14511_c17",
            "poiid": 82833240
          },
          {
            "ct_poi": "936879945111165696_a1652_c18",
            "poiid": 1166264
          },
          {
            "ct_poi": "936879945111165696_a9448_c19",
            "poiid": 4830346
          }
        ],
        "paging": {
          "hasMore": true,
          "limit": 20,
          "offset": 0,
          "total": 65
        },
        "resId": "1535070800402"
      },
// 沈阳
 Json:{
    "cinemas": [
      {
        "id": 1071,
        "mark": 0,
        "nm": "新东北影城(百联店)",
        "sellPrice": "16",
        "addr": "沈河区青年大街55号（百联购物中心4楼）",
        "distance": "363.8km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减16元"
        }
      },
      {
        "id": 15743,
        "mark": 0,
        "nm": "盈日国际影城(白塔店)",
        "sellPrice": "20",
        "addr": "浑南区上亿广场4楼",
        "distance": "353.1km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减6元"
        }
      },
      {
        "id": 13354,
        "mark": 0,
        "nm": "百汇国际影城",
        "sellPrice": "20",
        "addr": "法库县家百惠商场4楼",
        "distance": "435.2km",
        "tag": {
          "allowRefund": 1,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 1,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减12元"
        }
      },
      {
        "id": 1052,
        "mark": 0,
        "nm": "比高电影城(沈阳店)",
        "sellPrice": "22",
        "addr": "大东区津桥路7号天润广场5层",
        "distance": "366.1km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减16元"
        }
      },
      {
        "id": 16112,
        "mark": 0,
        "nm": "北联金汇影城",
        "sellPrice": "23",
        "addr": "于洪区沙岭路2-1号",
        "distance": "355.7km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减10元"
        }
      },
      {
        "id": 5239,
        "mark": 0,
        "nm": "大商影城(黄海路店)",
        "sellPrice": "23",
        "addr": "于洪区黄海路45号大商新玛特购物广场7楼（家乐福对面）",
        "distance": "359.1km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减8元"
        }
      },
      {
        "id": 16230,
        "mark": 0,
        "nm": "实维影院",
        "sellPrice": "23",
        "addr": "浑南区沈阳浑南新区南平中路6号沈阳理工大学校园综合服务中心2楼",
        "distance": "359.9km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 0,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减6元"
        }
      },
      {
        "id": 5380,
        "mark": 0,
        "nm": "沈阳市工人文化宫职工文化影城",
        "sellPrice": "23",
        "addr": "铁西区南九中路76号",
        "distance": "360.6km",
        "tag": {
          "allowRefund": 1,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 1,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减10元"
        }
      },
      {
        "id": 1068,
        "mark": 0,
        "nm": "中影华臣影城(三好街店)",
        "sellPrice": "23",
        "addr": "和平区文萃路4号诚大数码国际广场5层（KFC北面）",
        "distance": "360.9km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {}
      },
      {
        "id": 1063,
        "mark": 0,
        "nm": "耀莱成龙国际影城(三好街店)",
        "sellPrice": "23",
        "addr": "沈河区青年大街185号（茂业百货7层）",
        "distance": "361km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallType": [],
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 0,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减8元"
        }
      },
      {
        "id": 1072,
        "mark": 0,
        "nm": "文化宫影城(民主路店)",
        "sellPrice": "23",
        "addr": "和平区民主路72号（近时尚地下转盘处）",
        "distance": "361.9km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 0,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减10元"
        }
      },
      {
        "id": 1060,
        "mark": 0,
        "nm": "七星国际影城",
        "sellPrice": "23",
        "addr": "和平区马路湾光荣街10号（近马路湾原辽宁电台202医院对面）",
        "distance": "362.2km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallType": [],
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减14元"
        }
      },
      {
        "id": 1053,
        "mark": 0,
        "nm": "中影华臣影城(南塔店)",
        "sellPrice": "23",
        "addr": "沈河区文化路139号箱包时装奥莱城5楼",
        "distance": "362.3km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减16元"
        }
      },
      {
        "id": 1604,
        "mark": 0,
        "nm": "新东北影城(中兴店)",
        "sellPrice": "23",
        "addr": "和平区太原北街86号，中兴沈阳商业大厦7楼（近中华路）",
        "distance": "362.4km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallType": [
            "DTS:X 临境音厅"
          ],
          "hallTypeVOList": [
            {
              "name": "DTS:X 临境音厅",
              "url": ""
            }
          ],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减12元"
        }
      },
      {
        "id": 1077,
        "mark": 0,
        "nm": "星辰9号幻影会",
        "sellPrice": "23",
        "addr": "和平区同泽北街9号银都大厦1楼（近北二马路）",
        "distance": "362.9km",
        "tag": {
          "allowRefund": 1,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 1,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减10元"
        }
      },
      {
        "id": 24283,
        "mark": 0,
        "nm": "星迹激光影城",
        "sellPrice": "23",
        "addr": "和平区市府大路188号，萃兮优客城市奥莱7层",
        "distance": "364.5km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减6元"
        }
      },
      {
        "id": 17182,
        "mark": 0,
        "nm": "新华国际影城(沈阳店)",
        "sellPrice": "23",
        "addr": "沈河区市府大路262-6号401（卓展购物中心正对面）",
        "distance": "365.2km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallType": [
            "杜比全景声厅",
            "4K厅",
            "巨幕厅"
          ],
          "hallTypeVOList": [
            {
              "name": "杜比全景声厅",
              "url": ""
            },
            {
              "name": "4K厅",
              "url": ""
            },
            {
              "name": "巨幕厅",
              "url": ""
            }
          ],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减16元"
        }
      },
      {
        "id": 10403,
        "mark": 0,
        "nm": "光陆影城",
        "sellPrice": "23",
        "addr": "沈河区中街路187号（近朝阳街）",
        "distance": "365.5km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减6元"
        }
      },
      {
        "id": 1070,
        "mark": 0,
        "nm": "中影华臣影城(华府天地店)",
        "sellPrice": "23",
        "addr": "沈河区哈尔滨路118号华府天地购物中心一期4楼（近北京街）",
        "distance": "365.6km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减16元"
        }
      },
      {
        "id": 1076,
        "mark": 0,
        "nm": "大商影城(千盛店)",
        "sellPrice": "23",
        "addr": "皇姑区长江街99号千盛购物中心2楼",
        "distance": "366.2km",
        "tag": {
          "allowRefund": 0,
          "buyout": 0,
          "cityCardTag": 0,
          "deal": 0,
          "endorse": 0,
          "hallTypeVOList": [],
          "sell": 1,
          "snack": 1,
          "vipTag": "折扣卡"
        },
        "promotion": {
          "cardPromotionTag": "开卡特惠，首单2张立减12元"
        }
      }
    ],
    "ct_pois": [
      {
        "ct_poi": "936879945111165696_a1071_c0",
        "poiid": 245996
      },
      {
        "ct_poi": "936879945111165696_a15743_c1",
        "poiid": 94333090
      },
      {
        "ct_poi": "936879945111165696_a13354_c2",
        "poiid": 42359804
      },
      {
        "ct_poi": "936879945111165696_a1052_c3",
        "poiid": 1459883
      },
      {
        "ct_poi": "936879945111165696_a16112_c4",
        "poiid": 100381338
      },
      {
        "ct_poi": "936879945111165696_a5239_c5",
        "poiid": 2399426
      },
      {
        "ct_poi": "936879945111165696_a16230_c6",
        "poiid": 116105422
      },
      {
        "ct_poi": "936879945111165696_a5380_c7",
        "poiid": 259480
      },
      {
        "ct_poi": "936879945111165696_a1068_c8",
        "poiid": 74054
      },
      {
        "ct_poi": "936879945111165696_a1063_c9",
        "poiid": 1433391
      },
      {
        "ct_poi": "936879945111165696_a1072_c10",
        "poiid": 1941115
      },
      {
        "ct_poi": "936879945111165696_a1060_c11",
        "poiid": 1439142
      },
      {
        "ct_poi": "936879945111165696_a1053_c12",
        "poiid": 1499462
      },
      {
        "ct_poi": "936879945111165696_a1604_c13",
        "poiid": 242888
      },
      {
        "ct_poi": "936879945111165696_a1077_c14",
        "poiid": 1439148
      },
      {
        "ct_poi": "936879945111165696_a24283_c15",
        "poiid": 164060538
      },
      {
        "ct_poi": "936879945111165696_a17182_c16",
        "poiid": 152527013
      },
      {
        "ct_poi": "936879945111165696_a10403_c17",
        "poiid": 5597070
      },
      {
        "ct_poi": "936879945111165696_a1070_c18",
        "poiid": 32376
      },
      {
        "ct_poi": "936879945111165696_a1076_c19",
        "poiid": 1524839
      }
    ],
    "paging": {
      "hasMore": true,
      "limit": 20,
      "offset": 0,
      "total": 79
    },
    "resId": "1535070942418"
  }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  click:function(){
    wx.navigateTo({
      url: '../pages/location/location',
    })
  }
})