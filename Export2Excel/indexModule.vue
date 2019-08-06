<template>
  <div class="oppo-container" id="main">
    <div class="oppo-header">
      <oppo-buttons ref="listBtn" :config="buttonConfig"></oppo-buttons>
    </div>
    <div class="oppo-main">
      <oppo-list ref="list" :config="listConfig"></oppo-list>
    </div>
    <!-- 查看串码弹出框 -->
    <oppo-checkcode :config="imeiDetail"></oppo-checkcode>
    <!-- 修改备注弹出框 -->
    <oppo-remark :config="remarkConfig"></oppo-remark>
  </div>
</template>

<script>
  export default {
    name: "",
    props: ["config"],
    components: {},
    data() {
      return {
        buttonConfig: {
          region: this.config.region === undefined ? "B181030004" : this.config.region,
          searchKey: this.config.searchKey === undefined ? "" : this.config.searchKey, //搜索字段编码  多个用逗号隔开
          searchPlaceholder: this.config.searchPlaceholder === undefined ? "请通过关键字搜索" : this.config.searchPlaceholder, //搜索框默认文字
          isSearch: this.config.isSearch === undefined ? true : this.config.isSearch, //是否显示搜索按钮
          isFilter: this.config.isFilter === undefined ? true : this.config.isFilter, //是否显示过滤按钮
        },
        listConfig: {
          btnRef: "listBtn", //绑定的按钮控件名称
          region: "B181030006", //按钮区域
          isPage: true,//是否显示分页
          columns: this.initColumns(), //列集合
          url: this.config.requestUrl.listUrl, //Url
          printUrl: this.config.requestUrl.printUrl,//打印url地址
          billType: this.config.billType,//打印单据类型
          //操作列按钮显示判断
          btnShowEvent: this.BtnShowEvent,
          defalutConditions: this.config.defalutConditions === undefined ? '' : this.config.defalutConditions,
          isSelection: this.config.isSelection === undefined ? false : this.config.isSelection,//是否多选框
        },
        editConfig: this.openDialog(),
        imeiDetail: this.openDialog(),//查看串码弹窗
        remarkConfig: this.openDialog(),//修改备注弹窗
        jumpType: 1
      };
    },
    created() {
    },
    watch: {
      config: function (val) {
        let vue = this;
        console.log('config', val);
        // vue.init(val);
      },
      $route(to, from) {
        let vue = this;
        // vue.logger('from', from);
        // vue.logger(JSON.parse(sessionStorage.getItem('editableTabs')));
        let array = JSON.parse(sessionStorage.getItem('editableTabs'));
        // vue.logger('find',array.find(function (item) {return item.path === from.fullPath;}));
        if (
          array.find(function (item) {
            return item.path === from.fullPath;
          }) === undefined
        ) {
          vue.logger('jumpType', sessionStorage.getItem('jumpType'));
          if (sessionStorage.getItem('jumpType') !== '2') {
            vue.$emit("oppoListRefresh");
          } else {
          }
        }
      }
    },
    mounted() {
      let vue = this;
      //监控头部按钮点击事件,必须有
      vue.$on('oppoButtonsClick', function (params) {
        switch (params.id) {
          case "BtnAdd":
            vue.addInfo();
            break;
          case "BtnExport":
            vue.exportInfo();
            break;
        }
      });
      //监控列表按钮点击事件,必须有
      vue.$on('oppoListButtonsClick', function (parmas) {
        let row = parmas.row;
        let id = parmas.id;
        switch (id) {
          case "BtnUpdate": //编辑
            vue.UpdateInfo(row);
            break;
          case "BtnSubmit"://提交
            vue.BtnSubmit(row);
            break;
          case "BtnDelete": //删除
            vue.deleteInfo(row);
            break;
          case "BtnDetail": //浏览
            vue.BtnBrowse(row);
            break;
          case "BtnBrowse": //浏览
            vue.BtnBrowse(row);
            break;
          case "BtnRecyle": //回收
            vue.BtnRecyle(row);
            break;
          case "BtnPrint": //打印
            vue.BtnPrint(row);
            break;
          case "BtnVerify": //审核
            vue.BtnVerify(row);
            break;
          case "BtnCancel": //取消审核
            vue.BtnCancel(row);
            break;
          case "BtnOut": //取消审核
            vue.BtnOut(row);
            break;
          case "BtnConfirm": //取消审核
            vue.BtnConfirm(row);
            break;
          case "BtnSerial":
            this.detailSerial(row);//查看串码
            break;
          case "BtnRemark":
            this.remarkInfo(row);//备注
            break;
          case "BtnReceipt":
            this.confirmInfo(row);//确认收货
            break;
          case "BtnInStock":
            vue.BtnInStock(row); //订单出库
            break;
          case "BtnVerifyJump":
            vue.BtnVerifyJump(row); //订单出库
            break;
        }
      });
    },
    methods: {
      //初始化
      init(val) {
        console.log('indexModule', val);
        let vue = this;
        vue.initColumns(val);
      },
      //列表按钮显示
      BtnShowEvent(btnNo, row) {
        let vue = this;
        return this.$parent.BtnShowEvent(btnNo, row);
      },
      // 新增 type或者jumpType等于1
      addInfo() {
        sessionStorage.setItem('jumpType', '1');

        this.pageJump(this.config.pageAddress, {
          type: 1,
          page: this.config.page,
          jumpType: 1,
          fromPath: this.$route.path
        });
      },
      // 浏览 type或者jumpType等于2
      BtnBrowse(row) {
        sessionStorage.setItem('jumpType', '2');
        this.pageJump(this.config.pageAddress, {
          type: 2,
          data: row,
          page: this.config.page,
          jumpType: 2,
          fromPath: this.$route.path
        });
      },
      // 确认收货 jumpType:2, comfirmType:1，说明在浏览单据页面确认收货
      confirmInfo(row) {
        sessionStorage.setItem('jumpType', '1');

        this.pageJump(this.config.pageAddress, {data: row, jumpType: 2, comfirmType: 1});
      },
      //列表编辑按钮
      UpdateInfo(row) {
        sessionStorage.setItem('jumpType', '1');

        this.pageJump(this.config.pageAddress, {type: 4, data: row, page: this.config.page});
      },
      //订单出库按钮
      BtnInStock(row) {
        sessionStorage.setItem('jumpType', '1');

        this.pageJump(this.config.pageAddress, {type: 3, data: row});
      },
      //审核跳转页面按钮
      BtnVerifyJump(row) {
        sessionStorage.setItem('jumpType', '1');

        this.pageJump(this.config.pageAddress, {type: 3, data: row});
      },
      //列表提交事件
      BtnSubmit(row) {
        let vue = this;
        vue.confirm(
          vue.$t("CommonRes.AreYouSureSumbit").format(row.Code),
          function () {
            vue.showloading(vue.$t("CommonRes.LoadingSubmit"));
            vue.ajaxPost(
              vue.config.requestUrl.submitUrl,
              {Code: row.Code},
              function (result) {
                vue.hideloading();
                if (result != null) {
                  if (result.MsgStatus === 1) {
                    vue.alert(result.Msg);
                    vue.$emit("oppoListRefresh");
                  } else {
                    vue.error(result.Msg);
                  }
                }
              },
              function () {
                vue.hideloading();
              }
            );
          }
        );
      },
      //列表删除事件
      deleteInfo(row) {
        let vue = this;
        vue.confirm(vue.$t('CommonRes.AreYouSureDelete').format(row.SheetNo || row.Code || row.Name), function () {
          vue.showloading(vue.$t('CommonRes.LoadingDelete'));
          let data;
          if (row.SheetNo) {
            data = {
              SheetNo: row.SheetNo,
              RowVer: row.RowVer
            }
          } else if (row.Code) {
            data = {
              Code: row.Code,
              RowVer: row.RowVer
            }
          } else {
            data = {
              Id: row.Id
            }
          }
          vue.ajaxPost(vue.config.requestUrl.deleteUrl, data, function (result) {
            vue.hideloading();
            if (result != null) {
              if (result.MsgStatus === 1) {
                vue.alert(result.Msg);
                vue.$emit('oppoListRefresh');
              } else {
                vue.error(result.Msg);
              }
            }
          }, function () {
            vue.hideloading();
          });
        });

      },
      //列表回收事件
      BtnRecyle(row) {
        let vue = this;
        vue.confirm(vue.$t('CommonRes.AreYouSureRecyle').format(row.SheetNo), function () {
          vue.showloading(vue.$t('CommonRes.LoadingRecyle'));
          vue.ajaxPost(vue.config.requestUrl.recyleUrl, {SheetNo: row.SheetNo}, function (result) {
            vue.hideloading();
            if (result != null) {
              if (result.MsgStatus === 1) {
                vue.pageJump(this.config.pageAddress, {type: 3, data: result.Data});
              }
            }
          }, function () {
            vue.hideloading();
          });
        });
      },
      //列表审核事件
      BtnVerify(row) {
        let vue = this;
        vue.logger('verifyUrl', this.config.requestUrl.verifyUrl);
        vue.confirm(vue.$t('CommonRes.AreYouSureVerify').format(row.SheetNo || row.Code), function () {
          vue.showloading(vue.$t('CommonRes.LoadingVerify'));
          let data;
          if (row.SheetNo) {
            data = {
              SheetNo: row.SheetNo,
              RowVer: row.RowVer
            }
          } else {
            data = {
              Code: row.Code,
              RowVer: row.RowVer
            }
          }
          vue.ajaxPost(vue.config.requestUrl.verifyUrl, data, function (result) {
            vue.hideloading();
            if (result != null) {
              if (result.MsgStatus === 1) {
                vue.alert(result.Msg);
                vue.$emit('oppoListRefresh');
                // vue.pageJump(this.config.pageAddress, {type: 3, data: result.Data});
              }
            }
          }, function () {
            vue.hideloading();
          });
        });
      },
      //列表确认收货事件
      BtnConfirm(row) {
        let vue = this;
        vue.logger('row', row);
        vue.confirm(vue.$t('CommonRes.AreYouSureConfirm').format(row.SheetNo || row.Code), function () {
          vue.showloading(vue.$t('CommonRes.LoadingConfirm'));
          vue.ajaxPost(vue.config.requestUrl.confirmUrl, row.SheetNo === undefined ? {
            Code: row.Code,
            RowVer: row.RowVer
          } : {SheetNo: row.SheetNo, RowVer: row.RowVer}, function (result) {
            vue.hideloading();
            if (result != null) {
              if (result.MsgStatus === 1) {
                vue.alert(result.Msg);
                vue.$emit('oppoListRefresh');
              }
            }
          }, function () {
            vue.hideloading();
          });
        });
      },
      //列表取消审核事件
      BtnCancel(row) {
        let vue = this;
        vue.confirm(vue.$t('CommonRes.AreYouCancelVerify').format(row.SheetNo || row.Code), function () {
          vue.showloading(vue.$t('CommonRes.LoadingCancelAudit'));
          vue.ajaxPost(vue.config.requestUrl.cancelUrl, row.SheetNo === undefined ? {
            Code: row.Code,
            RowVer: row.RowVer
          } : {SheetNo: row.SheetNo, RowVer: row.RowVer}, function (result) {
            vue.hideloading();
            if (result != null) {
              if (result.MsgStatus === 1) {
                vue.alert(result.Msg);
                vue.$emit('oppoListRefresh');
              } else {
                vue.error(result.Msg);
              }
            }
          }, function () {
            vue.hideloading();
          });
        });
      },
      // 打印功能
      BtnPrint(row) {
        let vue = this;
        let LODOP;
        vue.logger('row', row.SheetNo || row.Code);
        try {
          LODOP = getCLodop();
        } catch (e) {
          this.$confirm('检测未安装打印程序，是否下载？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            window.open('http://192.168.103.11:1010/Lodop/CLodop_Setup_for_Win32NT.exe');
            this.$message({
              type: 'info',
              message: '下载完成后请安装，完成后刷新页面'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消下载'
            });
          });
          return;
        }
        if (vue.listConfig.printUrl) {
          vue.logger('vue.listConfig.printUrl', vue.listConfig.printUrl);
          if (vue.listConfig.printUrl === 'TwoReturnOut/QuerySingleInfo') {
            vue.Print(getCLodop(), vue.listConfig.billType, vue.listConfig.printUrl, {SheetNo: row.SheetNo});
          } else {
            vue.Print(getCLodop(), vue.listConfig.billType, vue.listConfig.printUrl, row.Code === undefined ? row.OrderNo === undefined ? {SheetNo: row.SheetNo} : {SheetNo: row.OrderNo} : {Code: row.Code});
          }
        } else {
          vue.error('请传值');
        }
        LODOP.On_Return = function (TaskID, Value) {
          vue.logger('TaskID', TaskID);
          vue.ajaxPost('Print/Print', row.Code === undefined ? {SheetNo: row.SheetNo} : {SheetNo: row.Code}, function (result) {
            vue.hideloading();
            if (result != null) {
              vue.logger('printResult', result);
              if (result.MsgStatus === 1) {
              } else {
                vue.error(result.Msg);
              }
            }
          }, function () {
            vue.hideloading();
          });
        };
      },
      //导出
      exportInfo() {
        let vue = this;
        let tHeader = [];
        let tFilterVal = [];
        let columns = vue.listConfig.columns;
        let tilte = "导出列表excel";
        let url = vue.listConfig.url;
        if (vue.config.exportConfig.header) {
          columns = vue.config.exportConfig.header;
        }
        if (vue.config.exportConfig.title) {
          tilte = vue.config.exportConfig.title;
        }
        if (vue.config.exportConfig.url) {
          url = vue.config.exportConfig.url;
        }
        columns.forEach(item => {
          tHeader.push(item.label);
          tFilterVal.push(item.prop);
        });
        let params = {
          Conditions: vue.listConfig.conditions,
          OrderBys: [],
          PageIndex: 1,
          PageSize: 0
        };
        vue.showloading(vue.$t('CommonRes.LoadingExport'));
        vue.ajaxPost(url, params, function (result) {
          vue.hideloading();
          if (result != null) {
            if (result.MsgStatus === 1) {
              let datas = result.Data;
              vue.ExportToExcel(tHeader, tFilterVal, datas, tilte)
              vue.alert(vue.$t('CommonRes.ExportSuccess'));
            } else {
              vue.alert(vue.$t('CommonRes.ExportFail'));
            }
          }
        }, function () {
          vue.hideloading();
        });
      },
      // 查看串码
      detailSerial(row) {
        this.imeiDetail = this.openDialog({
          title: this.$t("CommonRes.checkCode").format(row.Code || row.SheetNo),
          data: row.Code === undefined ? {code: row.SheetNo} : {code: row.Code},
          confirmback: data => {
            this.$emit("oppoListRefresh");
          }
        });
      },
      // 修改备注
      remarkInfo(row) {
        this.remarkConfig = this.openDialog({
          title: this.$t("CommonRes.UpdateRemark").format(row.Code || row.SheetNo),
          data: {rowData: row, remarkUrl: this.config.requestUrl.remarkUrl},
          confirmback: (data) => {
            this.$emit("oppoListRefresh");
          }
        });
      },
      //初始化列表column
      initColumns() {
        let vue = this;
        let columns = [];
        let val = this.config.columns;
        // console.log('initColumns', val);
        val.forEach(function (item) {
          let param = {
            prop: item.prop === undefined ? '' : item.prop,
            label: item.label === undefined ? '' : item.label,
            datatype: item.datatype === undefined ? "string" : item.datatype,
            sortable: item.sortable === undefined ? true : item.sortable,
            fit: item.width === undefined && item.minWidth === undefined,
            width: item.width === undefined ? undefined : item.width,
            minWidth: item.minWidth === undefined ? undefined : item.minWidth,
            url: item.url === undefined ? undefined : item.url,
            urlparmas: item.urlparmas === undefined ? undefined : item.urlparmas,
            urlfield: item.urlfield === undefined ? undefined : item.urlfield,
            datas: item.datas === undefined ? undefined : item.datas
          };
          columns.push(param);
        });
        // vue.logger('columns', columns);
        return columns;
      },
      BtnOut(row) {
        this.pageJump(this.config.pageAddressOutStock, {type: 1, data: row, page: 2});
      }
    }
  }
</script>


<style scoped>
</style>
