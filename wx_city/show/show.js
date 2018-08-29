//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    moveTop: false,
    city: [
      {
        "name": "北京",
        "city": [
          {
            "name": "北京",
            "area": [
              "东城区",
              "西城区",
              "崇文区",
              "宣武区",
              "朝阳区",
              "丰台区",
              "石景山区",
              "海淀区",
              "门头沟区",
              "房山区",
              "通州区",
              "顺义区",
              "昌平区",
              "大兴区",
              "平谷区",
              "怀柔区",
              "密云县",
              "延庆县"
            ]
          }
        ]
      },
      {
        "name": "天津",
        "city": [
          {
            "name": "天津",
            "area": [
              "和平区",
              "河东区",
              "河西区",
              "南开区",
              "河北区",
              "红桥区",
              "塘沽区",
              "汉沽区",
              "大港区",
              "东丽区",
              "西青区",
              "津南区",
              "北辰区",
              "武清区",
              "宝坻区",
              "宁河县",
              "静海县",
              "蓟  县"
            ]
          }
        ]
      },
      {
        "name": "河北",
        "city": [
          {
            "name": "石家庄",
            "area": [
              "长安区",
              "桥东区",
              "桥西区",
              "新华区",
              "郊  区",
              "井陉矿区",
              "井陉县",
              "正定县",
              "栾城县",
              "行唐县",
              "灵寿县",
              "高邑县",
              "深泽县",
              "赞皇县",
              "无极县",
              "平山县",
              "元氏县",
              "赵  县",
              "辛集市",
              "藁",
              "晋州市",
              "新乐市",
              "鹿泉市"
            ]
          },
          {
            "name": "唐山",
            "area": [
              "路南区",
              "路北区",
              "古冶区",
              "开平区",
              "新  区",
              "丰润县",
              "滦  县",
              "滦南县",
              "乐亭县",
              "迁西县",
              "玉田县",
              "唐海县",
              "遵化市",
              "丰南市",
              "迁安市"
            ]
          },
          {
            "name": "秦皇岛",
            "area": [
              "海港区",
              "山海关区",
              "北戴河区",
              "青龙满族自治县",
              "昌黎县",
              "抚宁县",
              "卢龙县"
            ]
          },
          {
            "name": "邯郸",
            "area": [
              "邯山区",
              "丛台区",
              "复兴区",
              "峰峰矿区",
              "邯郸县",
              "临漳县",
              "成安县",
              "大名县",
              "涉  县",
              "磁  县",
              "肥乡县",
              "永年县",
              "邱  县",
              "鸡泽县",
              "广平县",
              "馆陶县",
              "魏  县",
              "曲周县",
              "武安市"
            ]
          },
          {
            "name": "邢台",
            "area": [
              "桥东区",
              "桥西区",
              "邢台县",
              "临城县",
              "内丘县",
              "柏乡县",
              "隆尧县",
              "任  县",
              "南和县",
              "宁晋县",
              "巨鹿县",
              "新河县",
              "广宗县",
              "平乡县",
              "威  县",
              "清河县",
              "临西县",
              "南宫市",
              "沙河市"
            ]
          },
          {
            "name": "保定",
            "area": [
              "新市区",
              "北市区",
              "南市区",
              "满城县",
              "清苑县",
              "涞水县",
              "阜平县",
              "徐水县",
              "定兴县",
              "唐  县",
              "高阳县",
              "容城县",
              "涞源县",
              "望都县",
              "安新县",
              "易  县",
              "曲阳县",
              "蠡  县",
              "顺平县",
              "博野",
              "雄县",
              "涿州市",
              "定州市",
              "安国市",
              "高碑店市"
            ]
          },
          {
            "name": "张家口",
            "area": [
              "桥东区",
              "桥西区",
              "宣化区",
              "下花园区",
              "宣化县",
              "张北县",
              "康保县",
              "沽源县",
              "尚义县",
              "蔚  县",
              "阳原县",
              "怀安县",
              "万全县",
              "怀来县",
              "涿鹿县",
              "赤城县",
              "崇礼县"
            ]
          },
          {
            "name": "承德",
            "area": [
              "双桥区",
              "双滦区",
              "鹰手营子矿区",
              "承德县",
              "兴隆县",
              "平泉县",
              "滦平县",
              "隆化县",
              "丰宁满族自治县",
              "宽城满族自治县",
              "围场满族蒙古族自治县"
            ]
          },
          {
            "name": "沧州",
            "area": [
              "新华区",
              "运河区",
              "沧  县",
              "青  县",
              "东光县",
              "海兴县",
              "盐山县",
              "肃宁县",
              "南皮县",
              "吴桥县",
              "献  县",
              "孟村回族自治县",
              "泊头市",
              "任丘市",
              "黄骅市",
              "河间市"
            ]
          },
          {
            "name": "廊坊",
            "area": [
              "安次区",
              "固安县",
              "永清县",
              "香河县",
              "大城县",
              "文安县",
              "大厂回族自治县",
              "霸州市",
              "三河市"
            ]
          },
          {
            "name": "衡水",
            "area": [
              "桃城区",
              "枣强县",
              "武邑县",
              "武强县",
              "饶阳县",
              "安平县",
              "故城县",
              "景  县",
              "阜城县",
              "冀州市",
              "深州市"
            ]
          }
        ]
      },
      {
        "name": "山西",
        "city": [
          {
            "name": "太原",
            "area": [
              "小店区",
              "迎泽区",
              "杏花岭区",
              "尖草坪区",
              "万柏林区",
              "晋源区",
              "清徐县",
              "阳曲县",
              "娄烦县",
              "古交市"
            ]
          },
          {
            "name": "大同",
            "area": [
              "城  区",
              "矿  区",
              "南郊区",
              "新荣区",
              "阳高县",
              "天镇县",
              "广灵县",
              "灵丘县",
              "浑源县",
              "左云县",
              "大同县"
            ]
          },
          {
            "name": "阳泉",
            "area": [
              "城  区",
              "矿  区",
              "郊  区",
              "平定县",
              "盂  县"
            ]
          },
          {
            "name": "长治",
            "area": [
              "城  区",
              "郊  区",
              "长治县",
              "襄垣县",
              "屯留县",
              "平顺县",
              "黎城县",
              "壶关县",
              "长子县",
              "武乡县",
              "沁  县",
              "沁源县",
              "潞城市"
            ]
          },
          {
            "name": "晋城",
            "area": [
              "城  区",
              "沁水县",
              "阳城县",
              "陵川县",
              "泽州县",
              "高平市"
            ]
          },
          {
            "name": "朔州",
            "area": [
              "朔城区",
              "平鲁区",
              "山阴县",
              "应  县",
              "右玉县",
              "怀仁县"
            ]
          },
          {
            "name": "忻州",
            "area": [
              "忻府区",
              "原平市",
              "定襄县",
              "五台县",
              "代  县",
              "繁峙县",
              "宁武县",
              "静乐县",
              "神池县",
              "五寨县",
              "岢岚县",
              "河曲县",
              "保德县",
              "偏关县"
            ]
          },
          {
            "name": "吕梁",
            "area": [
              "离石区",
              "孝义市",
              "汾阳市",
              "文水县",
              "交城县",
              "兴  县",
              "临  县",
              "柳林县",
              "石楼县",
              "岚  县",
              "方山县",
              "中阳县",
              "交口县"
            ]
          },
          {
            "name": "晋中",
            "area": [
              "榆次市",
              "介休市",
              "榆社县",
              "左权县",
              "和顺县",
              "昔阳县",
              "寿阳县",
              "太谷县",
              "祁  县",
              "平遥县",
              "灵石县"
            ]
          },
          {
            "name": "临汾",
            "area": [
              "临汾市",
              "侯马市",
              "霍州市",
              "曲沃县",
              "翼城县",
              "襄汾县",
              "洪洞县",
              "古  县",
              "安泽县",
              "浮山县",
              "吉  县",
              "乡宁县",
              "蒲  县",
              "大宁县",
              "永和县",
              "隰  县",
              "汾西县"
            ]
          },
          {
            "name": "运城",
            "area": [
              "运城市",
              "永济市",
              "河津市",
              "芮城县",
              "临猗县",
              "万荣县",
              "新绛县",
              "稷山县",
              "闻喜县",
              "夏  县",
              "绛  县",
              "平陆县",
              "垣曲县"
            ]
          }
        ]
      },
      {
        "name": "内蒙古",
        "city": [
          {
            "name": "呼和浩特",
            "area": [
              "新城区",
              "回民区",
              "玉泉区",
              "郊  区",
              "土默特左旗",
              "托克托县",
              "和林格尔县",
              "清水河县",
              "武川县"
            ]
          },
          {
            "name": "包头",
            "area": [
              "东河区",
              "昆都伦区",
              "青山区",
              "石拐矿区",
              "白云矿区",
              "郊  区",
              "土默特右旗",
              "固阳县",
              "达尔罕茂明安联合旗"
            ]
          },
          {
            "name": "乌海",
            "area": [
              "海勃湾区",
              "海南区",
              "乌达区"
            ]
          },
          {
            "name": "赤峰",
            "area": [
              "红山区",
              "元宝山区",
              "松山区",
              "阿鲁科尔沁旗",
              "巴林左旗",
              "巴林右旗",
              "林西县",
              "克什克腾旗",
              "翁牛特旗",
              "喀喇沁旗",
              "宁城县",
              "敖汉旗"
            ]
          },
          {
            "name": "呼伦贝尔",
            "area": [
              "海拉尔市",
              "满洲里市",
              "扎兰屯市",
              "牙克石市",
              "根河市",
              "额尔古纳市",
              "阿荣旗",
              "莫力达瓦达斡尔族自治旗",
              "鄂伦春自治旗",
              "鄂温克族自治旗",
              "新巴尔虎右旗",
              "新巴尔虎左旗",
              "陈巴尔虎旗"
            ]
          },
          {
            "name": "兴安盟",
            "area": [
              "乌兰浩特市",
              "阿尔山市",
              "科尔沁右翼前旗",
              "科尔沁右翼中旗",
              "扎赉特旗",
              "突泉县"
            ]
          },
          {
            "name": "通辽",
            "area": [
              "科尔沁区",
              "霍林郭勒市",
              "科尔沁左翼中旗",
              "科尔沁左翼后旗",
              "开鲁县",
              "库伦旗",
              "奈曼旗",
              "扎鲁特旗"
            ]
          },
          {
            "name": "锡林郭勒盟",
            "area": [
              "二连浩特市",
              "锡林浩特市",
              "阿巴嘎旗",
              "苏尼特左旗",
              "苏尼特右旗",
              "东乌珠穆沁旗",
              "西乌珠穆沁旗",
              "太仆寺旗",
              "镶黄旗",
              "正镶白旗",
              "正蓝旗",
              "多伦县"
            ]
          },
          {
            "name": "乌兰察布盟",
            "area": [
              "集宁市",
              "丰镇市",
              "卓资县",
              "化德县",
              "商都县",
              "兴和县",
              "凉城县",
              "察哈尔右翼前旗",
              "察哈尔右翼中旗",
              "察哈尔右翼后旗",
              "四子王旗"
            ]
          },
          {
            "name": "伊克昭盟",
            "area": [
              "东胜市",
              "达拉特旗",
              "准格尔旗",
              "鄂托克前旗",
              "鄂托克旗",
              "杭锦旗",
              "乌审旗",
              "伊金霍洛旗"
            ]
          },
          {
            "name": "巴彦淖尔盟",
            "area": [
              "临河市",
              "五原县",
              "磴口县",
              "乌拉特前旗",
              "乌拉特中旗",
              "乌拉特后旗",
              "杭锦后旗"
            ]
          },
          {
            "name": "阿拉善盟",
            "area": [
              "阿拉善左旗",
              "阿拉善右旗",
              "额济纳旗"
            ]
          }
        ]
      },
      {
        "name": "内蒙古",
        "city": [
          {
            "name": "呼和浩特",
            "area": [
              "新城区",
              "回民区",
              "玉泉区",
              "郊  区",
              "土默特左旗",
              "托克托县",
              "和林格尔县",
              "清水河县",
              "武川县"
            ]
          },
          {
            "name": "包头",
            "area": [
              "东河区",
              "昆都伦区",
              "青山区",
              "石拐矿区",
              "白云矿区",
              "郊  区",
              "土默特右旗",
              "固阳县",
              "达尔罕茂明安联合旗"
            ]
          },
          {
            "name": "乌海",
            "area": [
              "海勃湾区",
              "海南区",
              "乌达区"
            ]
          },
          {
            "name": "赤峰",
            "area": [
              "红山区",
              "元宝山区",
              "松山区",
              "阿鲁科尔沁旗",
              "巴林左旗",
              "巴林右旗",
              "林西县",
              "克什克腾旗",
              "翁牛特旗",
              "喀喇沁旗",
              "宁城县",
              "敖汉旗"
            ]
          },
          {
            "name": "呼伦贝尔",
            "area": [
              "海拉尔市",
              "满洲里市",
              "扎兰屯市",
              "牙克石市",
              "根河市",
              "额尔古纳市",
              "阿荣旗",
              "莫力达瓦达斡尔族自治旗",
              "鄂伦春自治旗",
              "鄂温克族自治旗",
              "新巴尔虎右旗",
              "新巴尔虎左旗",
              "陈巴尔虎旗"
            ]
          },
          {
            "name": "兴安盟",
            "area": [
              "乌兰浩特市",
              "阿尔山市",
              "科尔沁右翼前旗",
              "科尔沁右翼中旗",
              "扎赉特旗",
              "突泉县"
            ]
          },
          {
            "name": "通辽",
            "area": [
              "科尔沁区",
              "霍林郭勒市",
              "科尔沁左翼中旗",
              "科尔沁左翼后旗",
              "开鲁县",
              "库伦旗",
              "奈曼旗",
              "扎鲁特旗"
            ]
          },
          {
            "name": "锡林郭勒盟",
            "area": [
              "二连浩特市",
              "锡林浩特市",
              "阿巴嘎旗",
              "苏尼特左旗",
              "苏尼特右旗",
              "东乌珠穆沁旗",
              "西乌珠穆沁旗",
              "太仆寺旗",
              "镶黄旗",
              "正镶白旗",
              "正蓝旗",
              "多伦县"
            ]
          },
          {
            "name": "乌兰察布盟",
            "area": [
              "集宁市",
              "丰镇市",
              "卓资县",
              "化德县",
              "商都县",
              "兴和县",
              "凉城县",
              "察哈尔右翼前旗",
              "察哈尔右翼中旗",
              "察哈尔右翼后旗",
              "四子王旗"
            ]
          },
          {
            "name": "伊克昭盟",
            "area": [
              "东胜市",
              "达拉特旗",
              "准格尔旗",
              "鄂托克前旗",
              "鄂托克旗",
              "杭锦旗",
              "乌审旗",
              "伊金霍洛旗"
            ]
          },
          {
            "name": "巴彦淖尔盟",
            "area": [
              "临河市",
              "五原县",
              "磴口县",
              "乌拉特前旗",
              "乌拉特中旗",
              "乌拉特后旗",
              "杭锦后旗"
            ]
          },
          {
            "name": "阿拉善盟",
            "area": [
              "阿拉善左旗",
              "阿拉善右旗",
              "额济纳旗"
            ]
          }
        ]
      },
      {
        "name": "辽宁",
        "city": [
          {
            "name": "沈阳",
            "area": [
              "沈河区",
              "皇姑区",
              "和平区",
              "大东区",
              "铁西区",
              "苏家屯区",
              "东陵区",
              "于洪区",
              "新民市",
              "法库县",
              "辽中县",
              "康平县",
              "新城子区",
              "其他"
            ]
          },
          {
            "name": "大连",
            "area": [
              "西岗区",
              "中山区",
              "沙河口区",
              "甘井子区",
              "旅顺口区",
              "金州区",
              "瓦房店市",
              "普兰店市",
              "庄河市",
              "长海县",
              "其他"
            ]
          },
          {
            "name": "鞍山",
            "area": [
              "铁东区",
              "铁西区",
              "立山区",
              "千山区",
              "海城市",
              "台安县",
              "岫岩满族自治县",
              "其他"
            ]
          },
          {
            "name": "抚顺",
            "area": [
              "顺城区",
              "新抚区",
              "东洲区",
              "望花区",
              "抚顺县",
              "清原满族自治县",
              "新宾满族自治县",
              "其他"
            ]
          },
          {
            "name": "本溪",
            "area": [
              "平山区",
              "明山区",
              "溪湖区",
              "南芬区",
              "本溪满族自治县",
              "桓仁满族自治县",
              "其他"
            ]
          },
          {
            "name": "丹东",
            "area": [
              "振兴区",
              "元宝区",
              "振安区",
              "东港市",
              "凤城市",
              "宽甸满族自治县",
              "其他"
            ]
          },
          {
            "name": "锦州",
            "area": [
              "太和区",
              "古塔区",
              "凌河区",
              "凌海市",
              "黑山县",
              "义县",
              "北宁市",
              "其他"
            ]
          },
          {
            "name": "营口",
            "area": [
              "站前区",
              "西市区",
              "鲅鱼圈区",
              "老边区",
              "大石桥市",
              "盖州市",
              "其他"
            ]
          },
          {
            "name": "阜新",
            "area": [
              "海州区",
              "新邱区",
              "太平区",
              "清河门区",
              "细河区",
              "彰武县",
              "阜新蒙古族自治县",
              "其他"
            ]
          },
          {
            "name": "辽阳",
            "area": [
              "白塔区",
              "文圣区",
              "宏伟区",
              "太子河区",
              "弓长岭区",
              "灯塔市",
              "辽阳县",
              "其他"
            ]
          },
          {
            "name": "盘锦",
            "area": [
              "双台子区",
              "兴隆台区",
              "盘山县",
              "大洼县",
              "其他"
            ]
          },
          {
            "name": "铁岭",
            "area": [
              "银州区",
              "清河区",
              "调兵山市",
              "开原市",
              "铁岭县",
              "昌图县",
              "西丰县",
              "其他"
            ]
          },
          {
            "name": "朝阳",
            "area": [
              "双塔区",
              "龙城区",
              "凌源市",
              "北票市",
              "朝阳县",
              "建平县",
              "喀喇沁左翼蒙古族自治县",
              "其他"
            ]
          },
          {
            "name": "葫芦岛",
            "area": [
              "龙港区",
              "南票区",
              "连山区",
              "兴城市",
              "绥中县",
              "建昌县",
              "其他"
            ]
          },
          {
            "name": "其他",
            "area": [
              "其他"
            ]
          }
        ]
      },
      {
        "name": "吉林",
        "city": [
          {
            "name": "长春",
            "area": [
              "朝阳区",
              "宽城区",
              "二道区",
              "南关区",
              "绿园区",
              "双阳区",
              "九台市",
              "榆树市",
              "德惠市",
              "农安县",
              "其他"
            ]
          },
          {
            "name": "吉林",
            "area": [
              "船营区",
              "昌邑区",
              "龙潭区",
              "丰满区",
              "舒兰市",
              "桦甸市",
              "蛟河市",
              "磐石市",
              "永吉县",
              "其他"
            ]
          },
          {
            "name": "四平",
            "area": [
              "铁西区",
              "铁东区",
              "公主岭市",
              "双辽市",
              "梨树县",
              "伊通满族自治县",
              "其他"
            ]
          },
          {
            "name": "辽源",
            "area": [
              "龙山区",
              "西安区",
              "东辽县",
              "东丰县",
              "其他"
            ]
          },
          {
            "name": "通化",
            "area": [
              "东昌区",
              "二道江区",
              "梅河口市",
              "集安市",
              "通化县",
              "辉南县",
              "柳河县",
              "其他"
            ]
          },
          {
            "name": "白山",
            "area": [
              "八道江区",
              "江源区",
              "临江市",
              "靖宇县",
              "抚松县",
              "长白朝鲜族自治县",
              "其他"
            ]
          },
          {
            "name": "松原",
            "area": [
              "宁江区",
              "乾安县",
              "长岭县",
              "扶余县",
              "前郭尔罗斯蒙古族自治县",
              "其他"
            ]
          },
          {
            "name": "白城",
            "area": [
              "洮北区",
              "大安市",
              "洮南市",
              "镇赉县",
              "通榆县",
              "其他"
            ]
          },
          {
            "name": "延边朝鲜族自治州",
            "area": [
              "延吉市",
              "图们市",
              "敦化市",
              "龙井市",
              "珲春市",
              "和龙市",
              "安图县",
              "汪清县",
              "其他"
            ]
          },
          {
            "name": "其他",
            "area": [
              "其他"
            ]
          }
        ]
      },
      {
        "name": "黑龙江",
        "city": [
          {
            "name": "哈尔滨",
            "area": [
              "松北区",
              "道里区",
              "南岗区",
              "平房区",
              "香坊区",
              "道外区",
              "呼兰区",
              "阿城区",
              "双城市",
              "尚志市",
              "五常市",
              "宾县",
              "方正县",
              "通河县",
              "巴彦县",
              "延寿县",
              "木兰县",
              "依兰县",
              "其他"
            ]
          },
          {
            "name": "齐齐哈尔",
            "area": [
              "龙沙区",
              "昂昂溪区",
              "铁锋区",
              "建华区",
              "富拉尔基区",
              "碾子山区",
              "梅里斯达斡尔族区",
              "讷河市",
              "富裕县",
              "拜泉县",
              "甘南县",
              "依安县",
              "克山县",
              "泰来县",
              "克东县",
              "龙江县",
              "其他"
            ]
          },
          {
            "name": "鹤岗",
            "area": [
              "兴山区",
              "工农区",
              "南山区",
              "兴安区",
              "向阳区",
              "东山区",
              "萝北县",
              "绥滨县",
              "其他"
            ]
          },
          {
            "name": "双鸭山",
            "area": [
              "尖山区",
              "岭东区",
              "四方台区",
              "宝山区",
              "集贤县",
              "宝清县",
              "友谊县",
              "饶河县",
              "其他"
            ]
          },
          {
            "name": "鸡西",
            "area": [
              "鸡冠区",
              "恒山区",
              "城子河区",
              "滴道区",
              "梨树区",
              "麻山区",
              "密山市",
              "虎林市",
              "鸡东县",
              "其他"
            ]
          },
          {
            "name": "大庆",
            "area": [
              "萨尔图区",
              "红岗区",
              "龙凤区",
              "让胡路区",
              "大同区",
              "林甸县",
              "肇州县",
              "肇源县",
              "杜尔伯特蒙古族自治县",
              "其他"
            ]
          },
          {
            "name": "伊春",
            "area": [
              "伊春区",
              "带岭区",
              "南岔区",
              "金山屯区",
              "西林区",
              "美溪区",
              "乌马河区",
              "翠峦区",
              "友好区",
              "上甘岭区",
              "五营区",
              "红星区",
              "新青区",
              "汤旺河区",
              "乌伊岭区",
              "铁力市",
              "嘉荫县",
              "其他"
            ]
          },
          {
            "name": "牡丹江",
            "area": [
              "爱民区",
              "东安区",
              "阳明区",
              "西安区",
              "绥芬河市",
              "宁安市",
              "海林市",
              "穆棱市",
              "林口县",
              "东宁县",
              "其他"
            ]
          },
          {
            "name": "佳木斯",
            "area": [
              "向阳区",
              "前进区",
              "东风区",
              "郊区",
              "同江市",
              "富锦市",
              "桦川县",
              "抚远县",
              "桦南县",
              "汤原县",
              "其他"
            ]
          },
          {
            "name": "七台河",
            "area": [
              "桃山区",
              "新兴区",
              "茄子河区",
              "勃利县",
              "其他"
            ]
          },
          {
            "name": "黑河",
            "area": [
              "爱辉区",
              "北安市",
              "五大连池市",
              "逊克县",
              "嫩江县",
              "孙吴县",
              "其他"
            ]
          },
          {
            "name": "绥化",
            "area": [
              "北林区",
              "安达市",
              "肇东市",
              "海伦市",
              "绥棱县",
              "兰西县",
              "明水县",
              "青冈县",
              "庆安县",
              "望奎县",
              "其他"
            ]
          },
          {
            "name": "大兴安岭地区",
            "area": [
              "呼玛县",
              "塔河县",
              "漠河县",
              "大兴安岭辖区",
              "其他"
            ]
          },
          {
            "name": "其他",
            "area": [
              "其他"
            ]
          }
        ]
      },
      {
        "name": "上海",
        "city": [
          {
            "name": "上海",
            "area": [
              "黄浦区",
              "卢湾区",
              "徐汇区",
              "长宁区",
              "静安区",
              "普陀区",
              "闸北区",
              "虹口区",
              "杨浦区",
              "宝山区",
              "闵行区",
              "嘉定区",
              "松江区",
              "金山区",
              "青浦区",
              "南汇区",
              "奉贤区",
              "浦东新区",
              "崇明县",
              "其他"
            ]
          }
        ]
      },
      {
        "name": "江苏",
        "city": [
          {
            "name": "南京",
            "area": [
              "玄武区",
              "白下区",
              "秦淮区",
              "建邺区",
              "鼓楼区",
              "下关区",
              "栖霞区",
              "雨花台区",
              "浦口区",
              "江宁区",
              "六合区",
              "溧水县",
              "高淳县",
              "其他"
            ]
          },
          {
            "name": "苏州",
            "area": [
              "金阊区",
              "平江区",
              "沧浪区",
              "虎丘区",
              "吴中区",
              "相城区",
              "常熟市",
              "张家港市",
              "昆山市",
              "吴江市",
              "太仓市",
              "其他"
            ]
          },
          {
            "name": "无锡",
            "area": [
              "崇安区",
              "南长区",
              "北塘区",
              "滨湖区",
              "锡山区",
              "惠山区",
              "江阴市",
              "宜兴市",
              "其他"
            ]
          },
          {
            "name": "常州",
            "area": [
              "钟楼区",
              "天宁区",
              "戚墅堰区",
              "新北区",
              "武进区",
              "金坛市",
              "溧阳市",
              "其他"
            ]
          },
          {
            "name": "镇江",
            "area": [
              "京口区",
              "润州区",
              "丹徒区",
              "丹阳市",
              "扬中市",
              "句容市",
              "其他"
            ]
          },
          {
            "name": "南通",
            "area": [
              "崇川区",
              "港闸区",
              "通州市",
              "如皋市",
              "海门市",
              "启东市",
              "海安县",
              "如东县",
              "其他"
            ]
          },
          {
            "name": "泰州",
            "area": [
              "海陵区",
              "高港区",
              "姜堰市",
              "泰兴市",
              "靖江市",
              "兴化市",
              "其他"
            ]
          },
          {
            "name": "扬州",
            "area": [
              "广陵区",
              "维扬区",
              "邗江区",
              "江都市",
              "仪征市",
              "高邮市",
              "宝应县",
              "其他"
            ]
          },
          {
            "name": "盐城",
            "area": [
              "亭湖区",
              "盐都区",
              "大丰市",
              "东台市",
              "建湖县",
              "射阳县",
              "阜宁县",
              "滨海县",
              "响水县",
              "其他"
            ]
          },
          {
            "name": "连云港",
            "area": [
              "新浦区",
              "海州区",
              "连云区",
              "东海县",
              "灌云县",
              "赣榆县",
              "灌南县",
              "其他"
            ]
          },
          {
            "name": "徐州",
            "area": [
              "云龙区",
              "鼓楼区",
              "九里区",
              "泉山区",
              "贾汪区",
              "邳州市",
              "新沂市",
              "铜山县",
              "睢宁县",
              "沛县",
              "丰县",
              "其他"
            ]
          },
          {
            "name": "淮安",
            "area": [
              "清河区",
              "清浦区",
              "楚州区",
              "淮阴区",
              "涟水县",
              "洪泽县",
              "金湖县",
              "盱眙县",
              "其他"
            ]
          },
          {
            "name": "宿迁",
            "area": [
              "宿城区",
              "宿豫区",
              "沭阳县",
              "泗阳县",
              "泗洪县",
              "其他"
            ]
          },
          {
            "name": "其他",
            "area": [
              "其他"
            ]
          }
        ]
      },
      {
        "name": "浙江",
        "city": [
          {
            "name": "杭州",
            "area": [
              "拱墅区",
              "西湖区",
              "上城区",
              "下城区",
              "江干区",
              "滨江区",
              "余杭区",
              "萧山区",
              "建德市",
              "富阳市",
              "临安市",
              "桐庐县",
              "淳安县",
              "其他"
            ]
          },
          {
            "name": "宁波",
            "area": [
              "海曙区",
              "江东区",
              "江北区",
              "镇海区",
              "北仑区",
              "鄞州区",
              "余姚市",
              "慈溪市",
              "奉化市",
              "宁海县",
              "象山县",
              "其他"
            ]
          },
          {
            "name": "温州",
            "area": [
              "鹿城区",
              "龙湾区",
              "瓯海区",
              "瑞安市",
              "乐清市",
              "永嘉县",
              "洞头县",
              "平阳县",
              "苍南县",
              "文成县",
              "泰顺县",
              "其他"
            ]
          },
          {
            "name": "嘉兴",
            "area": [
              "秀城区",
              "秀洲区",
              "海宁市",
              "平湖市",
              "桐乡市",
              "嘉善县",
              "海盐县",
              "其他"
            ]
          },
          {
            "name": "湖州",
            "area": [
              "吴兴区",
              "南浔区",
              "长兴县",
              "德清县",
              "安吉县",
              "其他"
            ]
          },
          {
            "name": "绍兴",
            "area": [
              "越城区",
              "诸暨市",
              "上虞市",
              "嵊州市",
              "绍兴县",
              "新昌县",
              "其他"
            ]
          },
          {
            "name": "金华",
            "area": [
              "婺城区",
              "金东区",
              "兰溪市",
              "义乌市",
              "东阳市",
              "永康市",
              "武义县",
              "浦江县",
              "磐安县",
              "其他"
            ]
          },
          {
            "name": "衢州",
            "area": [
              "柯城区",
              "衢江区",
              "江山市",
              "龙游县",
              "常山县",
              "开化县",
              "其他"
            ]
          },
          {
            "name": "舟山",
            "area": [
              "定海区",
              "普陀区",
              "岱山县",
              "嵊泗县",
              "其他"
            ]
          },
          {
            "name": "台州",
            "area": [
              "椒江区",
              "黄岩区",
              "路桥区",
              "临海市",
              "温岭市",
              "玉环县",
              "天台县",
              "仙居县",
              "三门县",
              "其他"
            ]
          },
          {
            "name": "丽水",
            "area": [
              "莲都区",
              "龙泉市",
              "缙云县",
              "青田县",
              "云和县",
              "遂昌县",
              "松阳县",
              "庆元县",
              "景宁畲族自治县",
              "其他"
            ]
          },
          {
            "name": "其他",
            "area": [
              "其他"
            ]
          }
        ]
      }
    ],
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  closeCity: function (e) {
    console.log(e)

    this.setData({
      'moveTop': e.detail
    })

  },
})