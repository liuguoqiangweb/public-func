import Vue from 'vue'
import config from 'libs/config'
import PrintModel from '../dataModule/PrintModel'


/**界面宽度 */
Vue.prototype.getClientWidth = function () {
  return window.document.body.clientWidth - 40;
};

/**界面高度 */
Vue.prototype.getClientHeight = function () {
  return (window.document.body.clientHeight - 170);
};

/**
 * 跳转界面
 * @returns {}
 */
Vue.prototype.pageJump = function (name, params) {
  if (this.$parent.includeCachePage) {
    var tempIncludePage = this.$parent.includeCachePage.find((item) => {
      return item.fullPath === this.$route.fullPath;
    });
    this.$parent.includeCachePage.remove(tempIncludePage);
  }
  this.$router.push({name: name, params: params});
};

/**
 * 获取界面Vue
 * @returns {}
 */
Vue.prototype.getUrl = function (url) {
  if (url) {
    return config.url + url;
  }
  return "";
};


/**
 * 获取用户信息
 * @returns {}
 */
Vue.prototype.getUserInfo = function () {
  var vue = this;
  var json = vue.cacheGet(vue.$config.WebPrev);
  if (json == null || json === "") {
    json = {UserNo: "NoLogin", UserName: "未登录", ImageUrl: ""}
    /* vue.error(vue.$t('CommonRes.LoginTimeOut'), function() {
        vue.$router.push('/Login');
    }); */
  }
  if (!json.ImageUrl) {
    json.ImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB4CAYAAADIb21fAAAYNklEQVR4Xu1dCXRUVZr+7qstqewBQkISkkoICZuyKjQKjWwtiDRoqoKA2o7Y3Ti9nPY49pzpM9Pdp3umuz3Tp5dp2m1GZWlSFRpUNCqoiIqxWUSUJYHsCyaB7Kkktb07539VJQEDqe1VvQDvHM7hpO679///7917//tvl2EEP1MshdpOtTMuyqbTc5UrS4QqHeCpAmcFnPEMcJYI8ERw6MAwBoDKw64LHBfAYANYJxjvZJw1ioyXA6xZgKuJuVR1AzpbX6JT3XPKWGIfiWJiI43o3N0bU0SbI58xPo0zNg/ARHA+GgypAPQh4qcPHM1g7CKAs4zzMs7ZF4JOU1G1dltriMaQvZsRAW5WsWmmwNg8DsxnBCZ4PoBY2aVz+QC9AKvgBDZwSOS8rK7I/GmYafBrOMWCm/X3DWnM4TAxxpcDbDaAZACCX9zJ11gE0A7wo5yzt7lGY667b/uX8g0XWM+KAnfs1o0xep1tFjgrBGPrAD4qMLbC/RZrA8RiznhJ/0DU0ZYHt1nDTcFQ4ykC3PxX742z9UevZALWg2MpAJ0ShBMADXYw7OMiduii+9+oWP1aTwB9hOyViIIrzdQox1qAbwLHnSHjSgkdMXwIsOf7BjS7IzWTIwauwbJuKbj4MwCk8WqUgIcMNDgAlIEJv6ox7twvQ//X7DLs4ObuLMoUBfEpgG0CoA03wxEazw6O5wTOfle1rrghXDSEDVxagmOi7A+KHE8wIDdcDCpsnErG8HvrgHZrOJbqsICbYymcJnLhNwxYoTBhR4QcDpQKTPxptbHkCzkJkB3c7GJTEWP8aYBlyMnIyOubN3LOnqwtMhfLRbts4NLxxjEQ/TMOPAlAtnHkEkyY+uUMeFpwqH9duWFHd6jHlEXoE4pNuS4BW8CxLNQEX5/98f0C45urjCWVoeQv5ODmFJvmcIaXAUwKJaE3QF9nGMdD1UXmI6HiNaTgZpuNyxnwws39NVB4eCMHHq01Wd4OtIfB74UMXIPZaATYcwASQkHYDdxHF8AfqzFZLMHKICTgGszGDQB7BkBMsATdfF+SgBXg36sxWbYHI4+gwfUA+2wIHeXB8HM9vRs0wEGBm20pMjHOXwQQfT1JVUG89HPGvlNrLDYHQlPA4GaZjYsEsF0eJ3ogY998xzcJtIvg99eZLAd8a36pVUDg5loKJ4iisBcMBf4OeLN9ABLgKBcEcZW/52C/wR2/44EklVrcA/CFAZAZ1lcuMTeYTf4VDZf+F1ayAhyMHXQ5hTX16//W4WsHfoNrMJv+AmCzrwOEsx2BxbkIJxch0j+I4BKCHF4gmccSKjAGgQlQMxUEMDDmtyjCyZp3rC01JvPjvg7sF0eGYtOjYHje187D2Y7AJIDi1Hok6+KQqI1FjDoaUWotNIJaApKQdohOuLiIfqcN7Y4eXOzvRJfdCjt3QcUIer9EEk4W3WNxbKopMr/gy8A+czLhb+umuFSu9wCW4kvH4WpDc1LkHCpBQIo2EVNGGTAnOR/5CeORoU/BWH0i4nSxX0E24LDB6rSh1daBL9qr8UnrKXzeXoWGvguwiw5wzsEYzWWlPrxV4GxxVZH55HAU+sRDjqUwgXOB1PHlw3UY7t+dcCFK0GLOqElYnjEHk5OyMCYqCTHqKESptNCpNFAJKmlGErM0a52iCw7uQI+9Hxf7u1Db+yWOtJaj7MJJVPc2w0WzWFBJQCvyYdjHIBqrjSVd16LPJ3CzzUU/ZOB/VBKjTk6gapATOw6zx+Rj6bg5uG3sJESr/A+cJBCru5pw+EI5DrWexLG2Cpzvb5OWeaXOYQ72o1pT8Z+CAtdgKcwHZ+8oxRlAc4lmn05Q49bECTBmfxPfHDcDKTGJQbmNSRGj/fjLvovYU/MRdtd/hKa+C9JYpHwp7+GNXKVaWnv/zvKr0TYs1QZz0TaAb1ACc5I2DI6xuiQsHjcT92R+A7ck5SBW504Rot+HZcgHRi72deLtpsPYXfcBjrdXks6t0BnMtteYijcGBG6O2biCg+1VShoHzaKU6ESsSp+PByYswYSEdB+gCqxJv3MA+xqOYHvVOzjRUSkpW5LGraxHFDnuqSsyvzkUWVf90MftXaXX9en3AZgfaX5IFSJgNYIKK9Pn4uGJKzAlOVs64sj59NiteL22DC9VleJsT5M0lPKOSuwjm966/PyqvX1XyuKq4BosRRvBOZ2nIh5b7AbXhUlxWXhimgmLM2YjXNtgt80KS/V7eLZiL5pt7dAweT+oAD5WOxh7tMZYvM0ncKdYCmP7IJQqJcXDJYpIjU5GUdYiPFywAklRcQHIIPBXGnsv4FfHt2Lfl0eUuf8yfKiHuOKUsaR3MJdDzlyPK48cxRH/TCUzIudYkXY7nrylCLlJ4Y+QJRrebjiMLeWv4vOOSqikvTcUqlvgH9wVbzo5YxuudA1+jUJPGqUZYCtDNnQQHZF9eKw2CY9P/DY2FCyDIHgrHwTRaQCvdtl68Uz5a3jpXCn6XaRcKQpcOiu80WfTmQZnMnyNQoPZuABgpEj5bw0IQGjXeoWAjVVFY2X6PDxasBJ5CZkRnTDvNB7FH06V4FxPk3QmVthjA/iyGpPlAy9dQ4CrHK8PWaGy9GPxk6lG3Js1XzIJRvIpb6/F/5aX4oMLn0u2aQXqzpd5jS4Dl0oVCE4HGaSpREFEHyLMwUXcProAv5z5CCYlZUeUHhr8grUdu6rfx66GD1HVe17adRV2NGoX1Zqp3hIOl4GbbTH9iHH8IeJSJKsJE6BhKixNnY1/mb4OGbGRd0ZJ5966j/Fy1T6Ud9aBCcpzEXKGH9cazZIf4BK4P/+5YJh85k0lpICQGVHNBCRp43BP+lx8d/JqjNVHfDGB3eXAW42H8XzFXnzeUS0pVQqbuYTovhqIK2AscX0FrqHYdCsYKNJ9bKRnLtmPyViQoR+DtVl3Yn3eMiTpwnu2HUoGZGM+0HQMfzm9B5+2V7qXZeVpza3gbFlNkfnEYHB/ACYtyRE3oBK4WkGDiQmZMBoWYU3WnYjVKCN69uD54/jT6d041nZWoeBKdpYf1xSZ/3wJXLOxBGD3R3rW0vhecCcljofJcBdWjZ+vGHAPNH6Kv5zZg6PtigWXJLirxmQplMDN3lmUzQT+FgCqzBbxh8DVCRrkxafjvqyFWGtYiHht5DNVyKn/buNRbCl/RcHLsgRfBRfZtyRwPZVlXleCk8A7c2nPTdePxr2Z38CDE7+FUVGRzy8j58X+hiOSGfJER5UyFSr31KQCK6skcHMspp9wjv+O+JQdRAAdhSiScUX6bfjh1PsVoS3bXHaUNnyCF86+jlMddZJnSnHaskeGjOEJNqH0bp2zJ+FFBr5OSeBKWigH7kqdgX+f+RAyYyOuxKPX3o9X6j7E1sq3cLa7SdHgcrCdLMNSmKzhqjcBfpuSwCVaKEpxWmIO/mPmw7gtJfKJ+k29rSiueg+vNnyMhr4WSVxKnbkAjrCcXQ/kweU6wAH5YlYC/GrItpyiS8R3cu/G+rylSAyzH/dKso+2nsGWU6/gWMdZdDv6JROQ0nxDXpoZ0MTcpQ4YKVMR991eKUw6sGmYgFmJedg8aQ0WZMwI8DMJ/jWX6MKuqgP4w+ldaLZ1KHnGepl1EbgPMbCXgmdfnh5o9uoFHTZNWIHNU+9DtCYCnkiKa+5owpaKV7Gn4SO44IIQeVvPsAJnOWbjv3Kw/xy2ZYQa0JmXwmzmjpqMJ6YW4va0qWGnpM82gB3n9mFbzX7U97eMCGAlfSDHbHqGA98Nu8T8GFDkQJw6CvdkzJWORWkxo/14O/imp9tq8ItPX0JZ+5mRkSzmPQ4ZLKa94LgneBHI2wMtz+nRo7Epb6VksQqXclXZ0YgXz72JPfUfotc5ALUQcdO7z4JmBrOpDMBcn9+IUEN3toGIqfEGrMtehOVZczE6mlJI5HnoY6roqMeOyv14vbEMXQ6rJzBOnvHk6JUZik1nRkr5A9KeKfnrloQcbMxbhrvHz4VapsB0Sgzbeu4tlDYexkV7V8hSVeQA8Wp9MoPZ2KCUJC9fGCeAKbR05qiJuD9rARamTkdqTAjvueDAmY5amKveQ2nTP9Bia4eKRTZ2yxe5DNWGluULAMKroQRKrec9Si2hZTpTPwarMuZhReY85CaMg14TFfD50+ZyoNfeh9PttdhZ/S4OtBxHv8um8ETsawuSwKVSsJEPc/ATcApUB+MYrU1AfnwmFqXNwOJxs5Adn+Z3dETnQA+Ot53Fhy0ncfjiGVR1N8Hq6oeKqRVrgfJFXCMCXO9ZVzq7MXaZYiPNYs6RE5uGham3YnpyHgxxaUjQxUqZ9RSLpRZUEDxaLp2ZyXVndznRYbeisbcZpztqcbz9HD7vrEG7vQdUAsUbdO4uy+BeKciOTN4qpZocrwRc0cuyt2hBtEqLOI1eUqa6HH3odlrdtSs8YpbKGzBI5RMoqC4nbhyyY1ORHBWHWCHKXfREpZW0bQpyG3Da0W23otbagvKuOjQPtGPA5ZAiQNzAeeDjgFallqJABKbCgMsOq6NfimMZCQArWqFycBcS1DGYOSoPC9OmY7QuAZ9cOIV9TUfROtAOFVWp8QLsmWEuzhGriUK8Jhb0UZDTX5q5nkA2moUOUQT5ZrsdVuljocwGUtIGz0nvbJ2ZnIfFabOkSJAT7ZU40HwcbQNd0kqgYI+Q+xNV4lGIBEu5t1kxKZg3Zqq0l5LLL0qtA0X9W2oP4P3mz9BgbQV9AFJNqRDYemmlIKCppFG8JkaqiLPOcBeWZsyGXh2NUx01Urb9x80npaB02hLooyCQL1W68mU3DE8bxRkxvDNmakI2HshdgiXpc5CiT7xsltT3tOLA+U+xt+FjaVntF+3Svgi6McDjhhtcQuHKmjS0pH7td6lEEZOKksVr9ViWOhurs+/AnDEF0KkvpShTzYx3m45h67l9ONvTqNQISM/MVZD5kfYy2j+nJmThkYn3SDPmaoFxbf3dONVZixPt53C6sw6nO2tQ39sKu+h0xzZJAeOEtdtcyBiXwKcZ5q2tQUB6Zxzt1VkxY6X9enpyLr6RMhV5SZlDWqW6Bnrx7vlj2Fv/McraTqGPzJLKS8pWjuPAXRZBLUVerDcsxr2GO6BVaTxKzuXqi1vxcf/N5rShsvs8ylpO4khbBeqszei0WeHgTikTzymSNk0XXV+aq2SUoH04SqWT9ucUXRImJYzHtOQcTB81AeNjxw6bdEb+3aMXKvBy1ds42HxcqmnlrnelnEcRLj8SO5UempGch3+auAJ3pt562VI4rLg4R6+zH20DPWjsbUGdtQWtAx1ot/Wgw9YjzSxStGg2k/Nfr4pCclQ80vSjpNlKeUgp0QmI08RAp/K9SoQIF8o76rG9ch9eqT8kjaOkoigs21L0sKcg9rAylKMB3TIcr47G7WMmYc34BVg0bkbQDnlKlO60WyVtuNfRhwEnHXNoJCrkKUhV5ehoRQCPiU4I2rx4/OJZPFv+Kj5qOQkrWbXkEFQAfXrDbN4AEHYDKmmm0UIU5o4uwCMTV2LWmALoNbohl2JfeZM0Xo9hw+tJulTmz61Kufdjt0EiFBVb6ez8cctJPFe+F/+4eBq0CSjA1OGKaIAc7bO3JBqwueDb+Nb42yU77kh9yLhBzoYXK0vRYL0Y8bIKUoCcO7RVoFSSOeEULM0mWh5XZ8zH45PXYHx8ajiHD/lYtErUdn+JlypKUVJ/UNIBqJZzBJ8jEQlKl2zFXER+XCYezVuJpRmzkCyj4z2cAj7Scho/P/4yPus8B62gjdj+KwWlE+PhTichw71O0KIwa6E0aykmSnl5roF9EuQ23Hr2TWyt2i/ZrCNVu1lKJyEWwpkIRoYDNWOYlVyAzZNXY8G46YFJUcFv1Xc347kze7G74QP0uWyROB5dSgQLZwqnQ3QhLToZ/zzp21ibvRCxWnfF1evpIX3izfpP8D9n9uBMd53bQhbeBfpSCqc0e8OQfC0dU0QX5qdMwy9nPYIJCeGvBheuj6i5rw3/V/EGzDXvo8PRE2blalDytQRusUn2sgl0/kzWxkvZ8t+bvBoJCkiolgts0isOnj+Bp7/YiTNddeFcmocomyAVPOH75LqgQjLYc47Zyfn4fsG9WJg+Q7bIRbkA87Vfr+27rqcFfzxVgvebT6Dd1h2msy//esETWApVBnelVlluq6YlWcvUuC/zTvxg6lqkxY4JYW1zX8Ue3nad9l7sqTmIvQ1lOHKxXHJWyL73DlWqiNiWq8gYBbNpBTUMsWl4IHsx1uUtgVY9tMcnvOKXdzSyWn128Rz+XvcBzLXvQcM0ss/eoYuMAZCrPCC53mh/XZI6C2uyF2BB2q3Xzbn2Wp8Hhcs29rbCXH0Afy7/u1TERWav0dXLA7q15tAW9qSDdL/LjnHRo/D4pDW4I3Ua8iQtWSm+E/lmL6Wk9NkHsKNqP37x2UuSO9Fdq1m25+qFPT1HIirJuz9UlW1ojyE7a27cOPzXrMcwJSkbo6MSbwRspVgsYnR71T48cXiLFGorI7h2gC+9ZkleKoFv5YKZAStC8X0RuD2OPuQnZOKFO56CIS5VirC4kZ7dNQfxvbLfSxdayQUuB0pjmGgaXAp/yLUxx2xcx8HoQoSg3RoELjnNpyQaYL7rFxh7nTgI/Pk4X6s7hE2HfieF9cgErouBb6w2WXYOpmtIcPNfvTfOPhBNd9UEfe0Mgdtp75ESt95Y/luppuON9rx3/hhMB34JvZqW5aDny1DiO6SN6r+7YvVrPcOCK+29Ibx6huzJidoYKTYqSqWRIva/utD2ekaaURUZFeqtLfik9bRcAXT+XT1D8g7lpVE0e8n0aHUOgLORkYoRqm+OdCqK6qTsB5nu9Dxk0/ct8+vSKGIux1K0knP+WqjK9MpunQkVIiHuR8ZsBJGBr6o2WUqHInnYw6aSLmoMscyvg+6CuKhRMknuWlfAXK79Iyn7/jpAzQcWQnDFqgSwgi628IHrG6LJYBvy1Rgedll27710rTmjSupLbwjJKZ5Jvp8xXhiSa809AE/j7huwI38HjOKFLyeBvJUxvqTaWPLFcKP4NHO9nRjMxk0Ae264Tm/+LqcE+GM1JsvzvozgF7iScSPEXiNfiLzZxi0BzvHX2iLzZl/l4Te443c8kKRSi3sAvtDXQW62C4UE2EGXU1hTv/5vdImgT4/f4FKvuZbCCaIo7B0pled8koSSG3GUC4K4qspYUukPmQGBSwNkmY2LBLBdSrjU0R+GR2DbdhH8/jqT5YC/tAcMLg3kuSH7RQDKuK7LX+6V376fM/adK2+09pXsoMB1K1jGDQB7BkDkb3XyleuR0a4P4N+tMVnoevmAnqDBvQlwQHIf7qU+cHy/psi8dbiG1/o9JOB6ADYCjM5f8cEQdPNddHPGHgt0KR4sv5CBKylZxaa7VQzPK/Eam5Hw0VA2vItjU12RmaJggn5CCq40gy2Ft0EUXr55TPITG45yCOJDNcaSw36+edXmIQeXRpLOwVz4K4AloSL0Ou/nHYGJ3/f3HDucTGQBlwadsH19vKhx/hsHnrwhItCHk/TQv1NBw6cFh/rXlRt2UN3rkD6ygeul0hMm+1sqbB5Sykd+Zw0M/Kkrw1FDyZbs4BKxOZbCaSIXfhOqQPdQCiASfVEAucDEn/ritguGvrCASwSO3boxJibK/qDIpUIcucEQPYLfrWQMv7cOaLe2PLjNKjcfYQPXy0juzqJMURCfAtimUOUjyS2kEPRPBUieEzj7XdW64oYQ9OdTF2EH10uVp4LOzwDMA3C9piE4AJSBCb+qMe6k5LqwPhED17tU66Mca8E53SUYdOpKWCU3/GCHwNizfQOa3eFYgociJ6LgegmiY5NT7VzBGCcnBAXh+V4Xd3ghh7OFnQPvgGOb2qkuleN44w8zigDXS7CUPgrMYlwgO7UJ4CG86ssfsfjblrUBYjEXhV0xKtfRwWmU/vYUyvaKAncwY5k7i8apGDcyxpcDbLYnKEDWtHQ/BEvFm9sBfpRz9raLM0vDuuLzfrwflqaKBXcw91nFppkCY/M4MJ8BEwGeDyA2LBK6NEgvwCo4cJYBh0TOy+qKzJ+GmQa/hhsR4A7mKHf3xhTR5shnjE/jjJGmPRGcjwYD1fQNVa1B8qc2g7GLIDA5L+OcfSHoNBVVa7e1+iXhCDYeceAOltUUS6G2U+2M0znVMdylyuKMpwNIFRgKOEM6B5IBJDAuRYnQ/u3NoiS+2zgDGRK6GNDOOJpE8swAzYyzJqZy1dnUTmuiU91zylhijyBGAQ/9/4oYHF4MSG8tAAAAAElFTkSuQmCC"
  }
  return json;
};
/**
 * 下载文件URL
 * @param {} url
 * @returns {}
 */
Vue.prototype.downloadFile = function (url, data) {
  var vue = this;
  vue.showloading(vue.$t('CommonRes.LoadingDownload'));
  let datas = {}
  if (data) {
    datas = data;
  }
  vue.ajaxPost(url, datas, function (result) {
    vue.hideloading();
    if (result.MsgStatus === 1) {
      window.open(vue.getUrl(result.Data));
    } else {
      vue.error(result.Msg);
    }
  }, function () {
    vue.hideloading();
  });
};
/**
 * 导出文件
 * @param {} url
 * @returns {}
 */
Vue.prototype.exportFile = function (url, conditions, columns, otherParams) {
  var vue = this;
  vue.showloading(vue.$t('CommonRes.LoadingExport'));
  vue.ajaxPost(url, {
      Conditions: conditions,
      Columns: columns == undefined ? [] : vue.convertExoprtColumn(columns),
      OtherParams: otherParams == undefined ? {} : otherParams
    },
    function (result) {
      vue.hideloading();
      if (result.MsgStatus === 1) {
        window.open(vue.getUrl(result.Data));
      } else {
        vue.error(result.Msg);
      }
    },
    function () {
      vue.hideloading();
    });
};
/**
 * 获取当前日期
 * @returns {}
 */
Vue.prototype.getCurrentDate = function () {
  //获取当前时间
  var nowDate = new Date();
  var year = nowDate.getFullYear();
  var month = nowDate.getMonth() + 1;
  var today = nowDate.getDate();
  var hours = nowDate.getHours();
  var minutes = nowDate.getMinutes();
  var seconds = nowDate.getSeconds();

  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (today >= 1 && today <= 9) {
    today = "0" + today;
  }
  var currentdate = year + "-" + month + "-" + today + " " + hours + ":" + minutes + ":" + seconds;
  return currentdate;
};
/**
 * 必填输入框未填写
 * @param {} data
 * @returns {}
 */
Vue.prototype.requiredError = () => {

}
/**
 * 组装Post Get参数集合
 * @param {} data
 * @returns {}
 */
Vue.prototype.getUrlParmaData = function (data) {
  let vue = this;
  var userInfo = vue.getUserInfo();
  var datas = {};
  datas.Data = data;
  if (data.IsMobileLogin != undefined) {
    userInfo.IsMobileLogin = data.IsMobileLogin;
  }
  var systemNo = this.$config.no;
  var dt = vue.getCurrentDate();
  var currentDateLong = new Date(dt.replace(new RegExp("-", "gm"), "/")).getTime(); //当前时间转换成long型
  var apiParams = {SystemNo: systemNo, UserNo: userInfo.UserNo, Token: userInfo.Token, RequestTime: currentDateLong}
  var sign = vue.paramsMd5(apiParams);
  datas.SystemNo = systemNo;
  datas.UserNo = userInfo.UserNo;
  datas.Token = userInfo.Token;
  datas.IsMobileLogin = userInfo.IsMobileLogin;
  datas.RequestTime = currentDateLong;
  datas.Sign = sign;
  return datas;
};
/**
 * Md5加密
 * @param {} arr
 * @returns {}
 */
Vue.prototype.paramsMd5 = function (arr) {
  var newarr = new Array();
  var key;
  for (key in arr) {
    if (arr.hasOwnProperty(key)) {
      newarr.push(key);
    }
  }
  newarr.sort(function (a, b) {
    return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
  });
  var md5Str = "";
  for (var i in newarr) {
    if (newarr.hasOwnProperty(i)) {
      var ks = newarr[i];
      md5Str += ("&" + ks + "_" + arr[ks]);
    }
  }
  return this.Md5(md5Str.substring(1));
};
/**
 * 根据身份证号获得出生日期和获得性别
 * @param {} code 身份证号 code
 * @param {} type type 1生日 2性别
 * @returns {}
 */
Vue.prototype.IdentityCodeInfo = function (code, type) {
  if (type === 1) {
    var birthdayno, birthdaytemp;
    if (code.length === 18) {
      birthdayno = code.substring(6, 14);
    } else if (code.length === 15) {
      birthdaytemp = code.substring(6, 12);
      birthdayno = "19" + birthdaytemp;
    } else {
      return '';
    }
    var birthday = birthdayno.substring(0, 4) +
      "-" +
      birthdayno.substring(4, 6) +
      "-" +
      birthdayno.substring(6, 8);
    return birthday;
  } else if (type === 2) {
    var sexno, sex;
    if (code.length === 18) {
      sexno = code.substring(16, 17);
    } else if (code.length === 15) {
      sexno = code.substring(14, 15);
    } else {
      return ''; //未知
    }
    var tempid = sexno % 2;
    if (tempid === 0) {
      sex = 'B181030013'; //女
    } else {
      sex = 'B181030012'; //男
    }
    return sex;
  }
  return '';
};
/**
 * 转换列数据
 * @param {} datas
 * @returns {}
 */
Vue.prototype.convertExoprtColumn = function (datas) {
  var listDatas = [];
  datas.forEach(function (item) {
    if (item.isShow) {
      listDatas.push({
        Key: item.prop,
        Value: item.label,
        ConvertKey: item.urlfield,
        Datas: item.datas == undefined ? [] : item.datas
      });
    }

  });
  return listDatas;
};
/**
 * 移除对象
 * @param {} datas
 * @param {} val
 * @returns {}
 */
Vue.prototype.removeObj = function (datas, val) {
  var index = datas.indexOf(val);
  if (index > -1) {
    datas.splice(index, 1);
  }
};

/**
 * 复制对象
 * @param {} obj 旧对象
 * @returns {}
 */
Vue.prototype.cloneObj = function (obj) {
  if (this.getDataType(obj) == "array") {
    var newObj = Object.assign([], obj);
    return newObj;
  } else {
    var newObj = Object.assign({}, obj);
    return newObj;
  }

};

/**
 * 刷新json对象值
 * @param {} oldJson 旧对象
 * @param {} newJson 新对象
 * @returns {}
 */
Vue.prototype.refreshJsonValue = function (oldJson, newJson) {
  for (var item in newJson) {
    if (oldJson.hasOwnProperty(item)) {
      oldJson[item] = newJson[item];
    }
  }
};

/**
 * 清除json对象值
 * @param {} oldJson 旧对象
 * @param {} newJson 新对象
 * @returns {}
 */
Vue.prototype.clearJsonValue = function (oldJson, newJson) {
  if (newJson == undefined)
    newJson = {};
  var gettype = Object.prototype.toString
  for (var item in oldJson) {
    if (newJson.hasOwnProperty(item)) {
      oldJson[item] = newJson[item];
    } else {
      switch (gettype.call(oldJson[item])) {
        case "[object String]":
          oldJson[item] = "";
          break;
        case "[object Number]":
          oldJson[item] = 0;
          break;
        case "[object Boolean]":
          oldJson[item] = false;
          break;
        case "[object Object]":
          oldJson[item] = {};
          break;
        case "[object Array]":
          oldJson[item] = [];
          break;
        case "[object Date]":
          oldJson[item] = this.getCurrentDate();
          break;

      }
    }
  }
};

/**获取数据类型 */
Vue.prototype.getDataType = function (data) {
  var gettype = Object.prototype.toString;
  switch (gettype.call(data)) {
    case "[object String]":
      return "string"
    case "[object Number]":
      return "number"
    case "[object Boolean]":
      return "boolean"
    case "[object Object]":
      return "object";
    case "[object Array]":
      return "array";
    case "[object Date]":
      return "date";
    case "[object MouseEvent]":
      return "event";
  }
};
/**
 * 本地分页
 * @param {} params {datas:"数据集",pageIndex:"页面",pageSize:"页数"}
 * @returns {}
 */
Vue.prototype.localPage = function (params) {
  var start = (params.pageIndex - 1) * parseInt(params.pageSize);
  var end = start + parseInt(params.pageSize);
  var datas = (params.datas.slice(start, end));
  return datas;
};
/*********************************消息及遮盖层*************************************************/
/**
 * 显示遮盖层
 * @returns {}
 */
Vue.prototype.showloading = function (content) {
  if (content == undefined) {
    content = this.$t('CommonRes.Loading');
  }
  this.$config.Loading = this.$root.$loading({
    lock: true,
    text: content,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
};
/**
 * 隐藏遮盖层
 * @returns {}
 */
Vue.prototype.hideloading = function () {
  this.$config.Loading.close();

};
/**
 * 提示消息框
 * @param {} content  内容
 * @param {} confirmHandler  确认事件
 * @returns {}
 */
Vue.prototype.alert = function (content, confirmHandler) {
  //1.我们要将数据转存成数组，格式为： data=['错误提示一！！！','错误提示二！！！','错误提示三！！！'];
  let data = content.split("<br>");
  //2.新建newDatas数组
  let newDatas = [];
  const h = this.$createElement;
  //3.通过循环data数组，调用h方法，将每项值传给h,h('标签名',样式,具体内容)
  for (let i in data) {
    //4.将data数据push进newDatas数组中
    newDatas.push(h('p', null, data[i]));
  }
  ;
  this.$root.$confirm("",this.$t('CommonRes.SystemPrompt'),{
    confirmButtonText: this.$t('CommonRes.BtnConfirm'), 
    message: h('div', null, newDatas),
    type: 'warning',
    center: false,
    showClose: false,
    showCancelButton: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    closeOnHashChange: false,
    callback: action => {
      if (action == "confirm") {
        if (confirmHandler) confirmHandler();
      }
      if (action == "cancel") {

      }
    }
  });
};
/**
 * 错误消息框
 * @param {} content  内容
 * @param {} confirmHandler  确认事件
 * @returns {}
 */
Vue.prototype.error = function (content, confirmHandler) { 
 /*  var box = document.getElementsByClassName("el-message-box__wrapper");
  if (box.length > 0 && box[0].style.display != "none") return;  */
  //1.我们要将数据转存成数组，格式为： data=['错误提示一！！！','错误提示二！！！','错误提示三！！！'];
  let data = content.split("<br>");
  //2.新建newDatas数组
  let newDatas = [];
  const h = this.$createElement;
  //3.通过循环data数组，调用h方法，将每项值传给h,h('标签名',样式,具体内容)
  for (let i in data) {
    //4.将data数据push进newDatas数组中
    newDatas.push(h('p', null, data[i]));
  }
  ;
  this.$root.$confirm("",this.$t('CommonRes.SystemPrompt'),{
    confirmButtonText: this.$t('CommonRes.BtnConfirm'),
    message: h('div', null, newDatas),
    type: 'error',
    center: false,
    showClose: false,
    customClass: 'myError',
    showCancelButton: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    closeOnHashChange: false,
    callback: action => {
      if (action == "confirm") {
        if (confirmHandler) confirmHandler();
      }
      if (action == "cancel") {

      }
    }
  }); 
  
   /*  //自动关闭,3秒自动关闭
    new Promise((resolve,reject) => {
      let myError=document.getElementsByClassName("myError");
      let titleSpan=null;
      let btn=null;
      let time=3;
      let title=this.$t('CommonRes.SystemPromptTime');
      if (myError.length > 0){
          titleSpan=myError[0].children[0].children[0].children[0];
          btn=myError[0].children[2];
          titleSpan.innerHTML=title.format(time); 
            let t1=setInterval(() => {
              time=time-1;
              if(time==0)
              { 
                btn.children[0].click();
                clearInterval(t1);
              }
              titleSpan.innerHTML=title.format(time); 
            }, 1000); 
      } 
      resolve(); 
    }); */
   
};
/**
 * 询问消息框
 * @param {} message
 * @param {} confirmHandler  确认事件
 * @param {} clearHandler  取消事件
 * @returns {}
 */
Vue.prototype.confirm = function (content, confirmHandler, clearHandler) {
  //1.我们要将数据转存成数组，格式为： data=['错误提示一！！！','错误提示二！！！','错误提示三！！！'];
  let data = content.split("<br>");
  //2.新建newDatas数组
  let newDatas = [];
  const h = this.$createElement;
  //3.通过循环data数组，调用h方法，将每项值传给h,h('标签名',样式,具体内容)
  for (let i in data) {
    //4.将data数据push进newDatas数组中
    newDatas.push(h('p', null, data[i]));
  }
  ;
  this.$root.$confirm("",this.$t('CommonRes.SystemPrompt'),{
    confirmButtonText: this.$t('CommonRes.BtnConfirm'),
    cancelButtonText: this.$t('CommonRes.BtnCancel'),
    cancelButtonClass: "el-button--info", 
    message: h('div', null, newDatas),
    type: 'warning',
    showClose: false,
    center: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    closeOnHashChange: false,
    callback: action => {
      if (action == "confirm") {
        if (confirmHandler) confirmHandler();
      }
      if (action == "cancel") {
        if (clearHandler) clearHandler();
      }
    }
  });
};

/*********************************弹出窗体*************************************************/


Vue.prototype.openDialog = function (config) {
  var defalt = {
    title: "",
    confirmback: null,
    cancelback: null,
    visible: false
  };
  if (config === undefined) {
    return defalt;
  }
  if (config.data) {
    config.data = this.cloneObj(config.data);
  }
  config.visible = true;
  const param = Object.assign(defalt, config);
  return param;
};

Vue.prototype.closeDialog = function (config, params) {
  var temp = {};
  if (config.data) {
    temp = this.cloneObj(params.data);
  }
  if (params.type === "cancel") {
    if (config.cancelback) {
      config.cancelback(temp);
    }
  }
  if (params.type === "sure") {
    if (config.confirmback) { 
      config.confirmback(temp);
    }
  }
  config.visible = false;
};

/*********************************ajax方法*************************************************/
/**
 * 错误事件
 * @param {} xhr
 * @param {} textStatus
 * @param {} errorThrown
 * @returns {}
 */
Vue.prototype.ajaxErrorHandler = function (error) {
  var vue = this;
  vue.logger('ajaxErrorHandler', error);
  var errorMsg = error.response == undefined ? error.message : error.response.data.Message;
  if (errorMsg.indexOf("timeout") > -1) {
    vue.error(vue.$t('CommonRes.ServerTimeout'));
  } else if (errorMsg.indexOf("Network Error") > -1) {
    vue.error(vue.$t('CommonRes.ServerNetworkError'));
  } else if (errorMsg === vue.$t('CommonRes.IllegalRequest') ||
    errorMsg === vue.$t('CommonRes.LoginTimeOut') ||
    errorMsg === vue.$t('CommonRes.YourCccountHasLogin')) {
    vue.error(errorMsg, function () {
      vue.hideloading();
      vue.cookieDel(vue.WebPrev);
      vue.$router.push('/Login');
    });
  } else {
    vue.error(errorMsg);
  }

};
/**
 * Post
 * @param {} url
 * @param {} file
 * @param {} postdata
 * @param {} isParma
 * @param {} isPost
 * @param {} ajaxSuccessHandler
 * @param {} ajaxErrorHandler
 * @returns {}
 */
Vue.prototype.ajaxFrom = function (url, file, postdata, ajaxSuccessHandler, ajaxErrorHandler) {
  var vue = this;
  var datas = vue.getUrlParmaData(postdata);
  vue.$http.post("User/GetSignTag", {Data: {Sign: datas.Sign}})
    .then(function (response) {
      datas.SignTag = response.data.Data;
      var fd = new FormData();
      fd.append('file', file);
      fd.append('data', JSON.stringify(datas));
      vue.$http.post(url, fd)
        .then(function (response) {
          if (ajaxSuccessHandler) ajaxSuccessHandler(response.data);
        }).catch(function (error) {
        if (ajaxErrorHandler) ajaxErrorHandler();
        vue.ajaxErrorHandler(error);
      });
    });


};
/**
 * Post
 * @param {} url
 * @param {} postdata
 * @param {} isPost
 * @param {} ajaxSuccessHandler
 * @param {} ajaxErrorHandler
 * @returns {}
 */
Vue.prototype.ajaxBase = function (url, postdata, isPost, ajaxSuccessHandler, ajaxErrorHandler) {
  var vue = this;
  if (postdata == undefined) postdata = {};
  postdata = vue.getUrlParmaData(postdata);
  if (postdata.UserNo === "") {
    return;
  }
  // vue.logger('ajaxBase', postdata);
  vue.$http.post("User/GetSignTag", {Data: {Sign: postdata.Sign}})
    .then(function (response) {
      postdata.SignTag = response.data.Data;
      if (isPost === true) {
        // console.log('ajaxPost', postdata);
        return new Promise(function (resolve, reject) {
          vue.$http.post(url, postdata)
            .then(function (response) {
              if (ajaxSuccessHandler) resolve(ajaxSuccessHandler(response.data));
            }).catch(function (error) {
            if (ajaxErrorHandler) ajaxErrorHandler();
            reject(vue.ajaxErrorHandler(error));
          });
        });

      } else {
        return new Promise(function (resolve, reject) {
          vue.$http.get(vue.getApiUrl(url), postdata)
            .then(function (response) {
              if (ajaxSuccessHandler) resolve(ajaxSuccessHandler(response.data));
            })
            .catch(function (error) {
              if (ajaxErrorHandler) ajaxErrorHandler();
              reject(vue.ajaxErrorHandler(error));
            });
        });
      }
    });
};
/**
 * Post 权限控制
 * @param {} url
 * @param {} postdata
 * @param {} ajaxSuccessHandler
 * @param {} ajaxErrorHandler
 * @returns {}
 */
Vue.prototype.ajaxPost = function (url, postdata, ajaxSuccessHandler, ajaxErrorHandler) {
  this.ajaxBase(url, postdata, true, ajaxSuccessHandler, ajaxErrorHandler);
};
/**
 * Get 权限控制
 * @param {} url
 * @param {} paramData
 * @param {} ajaxSuccessHandler
 * @param {} ajaxErrorHandler
 * @returns {}
 */
Vue.prototype.ajaxGet = function (url, postdata, ajaxSuccessHandler, ajaxErrorHandler) {
  this.ajaxBase(url, postdata, false, ajaxSuccessHandler, ajaxErrorHandler);
};
/*********************************localStorage缓存方法*************************************************/
/**
 * 设置缓存
 * @returns {}
 */
Vue.prototype.cacheSet = function (key, val) {
  var json;
  try {
    json = JSON.stringify(val);
  } catch (err) {
    json = val;
  }
  window.localStorage.setItem(key, json);
};
/**
 * 获取缓存
 * @returns {}
 */
Vue.prototype.cacheGet = function (key) {
  var json = window.localStorage.getItem(key);
  try {
    return JSON.parse(json);
  } catch (err) {
    return json;
  }
};
/**
 * 设置缓存
 * @returns {}
 */
Vue.prototype.cacheDel = function (key) {
  window.localStorage.removeItem(key);
};
/*********************************Cookie方法*************************************************/
/**
 * 设置Cookie
 * @param {} name
 * @param {} value
 * @returns {}
 */
Vue.prototype.cookieSet = function (name, value) {
  var json;
  try {
    json = JSON.stringify(value);
  } catch (err) {
    json = value;
  }
  var days = 1;
  var exp = new Date();
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(json) + ";expires=" + exp.toGMTString() + " ;path=/";
};
/**
 * 获取Cookie
 * @param {} name
 * @returns {}
 */
Vue.prototype.cookieGet = function (name) {
  var value = "";
  var arrStr = document.cookie.split("; ");
  for (var i = 0; i < arrStr.length; i++) {
    var temp = arrStr[i].split("=");
    if (temp[0] === name) {
      value = unescape(temp[1]);
    }
  }

  try {
    return JSON.parse(value);
  } catch (err) {
    return value;
  }

};
/**
 * 删除Cookie
 * @param {} name
 * @returns {}
 */
Vue.prototype.cookieDel = function (name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = this.cookieGet(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};
/*********************************组装Tree集合数据*************************************************/
/**
 * 组装树形树
 * @param {} datas 原始数据
 * @param {} no    编码
 * @param {} parentNo  父编码
 * @param {} value  //父编码值
 * @param {} treeid  //树形Id
 * @param {} level  //层级
 * @returns {}
 */
Vue.prototype.getTreeDatas = function (datas, no, parentNo, value, level = null) {
  var vue = this;
  //todo 无父节点如何拼接树形数据
  if (datas.length > 0) {
    var temps = datas.filter(function (item) {
      return item[parentNo] === value;
    });
    // let temps = datas;
    if (temps.length > 0) {
      var treeDatas = [];
      for (var i = 0; i < temps.length; i++) {
        var defaltLevel = 1;
        if (level !== undefined && level !== null) {
          defaltLevel = level + 1;
        }
        temps[i]["Level"] = defaltLevel;
        var tempDatas = vue.getTreeDatas(datas, no, parentNo, temps[i][no], defaltLevel);
        if (tempDatas.length > 0) {
          temps[i]["Children"] = tempDatas;
        }
        treeDatas.push(temps[i]);
      }
      return treeDatas;
    }
  }
  return [];
};
/*********************************获取按钮集合*************************************************/
/**
 * 获取界面按钮集合
 * @param {} 按钮显示区域 1 头部 2 列表
 * @returns {}
 */
Vue.prototype.getButtonList = function (region) {
  var menuActive = this.cacheGet("MenuActive");
  var buttons = this.cacheGet("MenuButtonList").filter(function (item) {
    return item.ParentNo === menuActive.MenuNo && item.MenuRegion === region
  });
  return buttons == undefined ? [] : buttons;
};
/**
 * 初始化列数据
 * @param {} columns
 * @returns {}
 */
Vue.prototype.loadColumnDatas = function (columns) {
  var vue = this;
  columns.forEach(function (item) {
    if (item.url != undefined && item.url !== "") {
      var allDatas = vue.$config.comboxAllDatas;
      var key = item.url + "?";
      if (item.urlparmas) {
        key += JSON.stringify(item.urlparmas);
      }
      var postDatas = allDatas.filter(m => m.Key === key);
      if (postDatas.length > 0) {
        item.datas = postDatas[0].Datas;
      } else {
        vue.ajaxPost(item.url, item.urlparmas, function (result) {
          item.datas = result.Data;
          vue.$config.comboxAllDatas.push({Key: key, Datas: item.datas});
        });
      }

    }
  });
};
/**
 * 排序
 * @param {} datas 数组
 * @param {} col 列
 * @param {} type 类型 desc,asc
 * @returns {}
 */
Vue.prototype.orderBy = function (datas, col, type) {
  var m;
  for (var i = 0; i < datas.length; i++) {
    for (var k = 0; k < datas.length; k++) {
      if (type === "asc") {
        if (datas[i][col] < datas[k][col]) {
          m = datas[k];
          datas[k] = datas[i];
          datas[i] = m;
        }
      } else if (type === "desc") {
        if (datas[i][col] > datas[k][col]) {
          m = datas[k];
          datas[k] = datas[i];
          datas[i] = m;
        }
      }

    }
  }
  return datas;
};
/**
 * 分组
 *
 */
Vue.prototype.groupBy = function (array, f) {
  const groups = {};
  array.forEach(function (o) {
    const group = JSON.stringify(f(o));
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return groups;
}
/**
 * 日期转换不要时间部分
 */
Vue.prototype.cellDateTimeToDateFormat = function (row, column, cellValue) {
  return new Date(cellValue).format("yyyy-MM-dd");
}
/**
 * 列表列价格转换
 */
Vue.prototype.cellPriceFormat = function (row, column, cellValue) {
  cellValue = (cellValue + '').replace(/[^0-9+-Ee.]/g, '');
  var n = !isFinite(+cellValue) ? 0 : +cellValue,
    prec = 4,
    dec = '.',
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.ceil(n * k) / k;
    };

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}
/*
* 参数说明：
* number：要格式化的数字
* decimals：保留几位小数
* dec_point：小数点符号
* thousands_sep：千分位符号
* */
Vue.prototype.numberFormat = function (number, decimals, dec_point, thousands_sep) {

  number = (number + '').replace(/[^0-9+-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? '' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.ceil(n * k) / k;
    };

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (sep) {
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, "$1" + sep + "$2");
    }
  }


  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
};

//打印事件 ，方便后期一键注释打印事件
Vue.prototype.logger = function (name, params) {
  console.log(name, params);
};
/**
 *
 * @param tHeader 表头 (const tHeader = ['编码', '名称', '渠道类型', '对接工厂'])
 * @param tFilterVal excel表列过滤Key值  （const filterVal = ['code', 'name', 'type', 'isFactory']）
 * @param tDatas 表列数据 array
 * @param defaultTitle excel表名 默认列表excel
 * @constructor
 */
Vue.prototype.ExportToExcel = function (tHeader, tFilterVal, tDatas, defaultTitle = '列表excel') {
  require.ensure([], () => {
    const {export_json_to_excel} = require('@/vendor/Export2Excel');
    const data = tDatas.map(v => tFilterVal.map(j => v[j]));
    export_json_to_excel(tHeader, data, defaultTitle);
  })
};
/**
 * 打印初始模板数据驱动模型
 * @param LODOP  LODOP打印构建函数
 * @param BillType  单据类型
 * @param Title  打印标题
 * @param BillInfo  打印form表单数据
 * @param detailsTableContext  打印列表详情数据
 * @param nowDate 打印时间
 * @constructor
 */
Vue.prototype.PrintModelInit = function (LODOP, BillType, Title, BillInfo, detailsTableContext, nowDate) {
  let vue = this;
  let data = PrintModel.find(item => {
    return item.Key === BillType
  }).Value;
  vue.logger('base', data);
  vue.logger('detailsTableContext', detailsTableContext);
  LODOP.PRINT_INIT(Title === undefined ? data.Title : Title);
  LODOP.SET_PRINT_MODE("PRINT_SETUP_PROGRAM", true);
  LODOP.SET_PRINT_MODE("PROGRAM_CONTENT_BYVAR", true);
  let intTop = 56;
  let intLeft = 68;
  let num = 0;
  vue.logger('BillInfo', BillInfo);
  for (let key in data.mastInfo) {
    if (data.mastInfo.hasOwnProperty(key)) {
      if (num !== 0 && num % 3 === 0) {
        intTop = 56;
        intTop += num / 3 * 30;
      }
      if (num % 3 === 0) {
        intLeft = 68;
      }
      LODOP.ADD_PRINT_TEXT(intTop, intLeft, 69, 20, data.mastInfo[key]);
      LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
      LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
      LODOP.ADD_PRINT_TEXT(intTop, intLeft + 69, 122, 20, BillInfo === undefined ? "BillInfo." + '' + key : BillInfo[key]);
      LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
      LODOP.SET_PRINT_STYLEA(0, "ContentVName", BillInfo === undefined ? "BillInfo." + '' + key : BillInfo[key]);
      intLeft += 201;
      num++;
    }
  }
  LODOP.ADD_PRINT_TEXT(intTop+30, 67, 69, 20, "备注：");
  LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
  LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
  LODOP.ADD_PRINT_TEXT(intTop+30, 134, 592, 45, BillInfo === undefined ? 'BillInfo.Remark' : BillInfo.Remark);
  LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
  LODOP.SET_PRINT_STYLEA(0, "ContentVName", BillInfo === undefined ? 'BillInfo.Remark' : BillInfo.Remark);
  LODOP.ADD_PRINT_TEXT(intTop+60, 67, 69, 20, "制单人：");
  LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
  LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
  LODOP.ADD_PRINT_TEXT(intTop+60, 136, 123, 20, BillInfo === undefined ? 'BillInfo.CreateUserName' : BillInfo.CreateUserName);
  LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
  LODOP.SET_PRINT_STYLEA(0, "ContentVName", BillInfo === undefined ? 'BillInfo.CreateUserName' : BillInfo.CreateUserName);
  LODOP.ADD_PRINT_TEXT(intTop+60, 492, 69, 20, "制单日期：");
  LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
  LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
  LODOP.ADD_PRINT_TEXT(intTop+60, 561, 168, 20, BillInfo === undefined ? 'BillInfo.CreateTime' : BillInfo.CreateTime === undefined? BillInfo.CreateDate: BillInfo.CreateTime);
  LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
  LODOP.SET_PRINT_STYLEA(0, "ContentVName", BillInfo === undefined ? 'BillInfo.CreateTime' : BillInfo.CreateTime === undefined? BillInfo.CreateDate: BillInfo.CreateTime);


  LODOP.ADD_PRINT_TABLE(intTop+90, "3.87%", "90%", 328, detailsTableContext === undefined ? "detailsTableContext" : detailsTableContext);
  LODOP.SET_PRINT_STYLEA(0, "ItemName", "form1");
  LODOP.SET_PRINT_STYLEA(0, "Horient", 2);
  LODOP.SET_PRINT_STYLEA(0, "ContentVName", detailsTableContext === undefined ? "detailsTableContext" : detailsTableContext);
  LODOP.ADD_PRINT_TEXTA("title", 20, 295, 149, 30, Title === undefined ? data.Title : Title);
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 14);
  LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
  LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
  LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
  LODOP.ADD_PRINT_TEXT(30, 63, 75, 20, "打印人：");
  LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
  LODOP.SET_PRINT_STYLEA(0, "LinkedItem", "form1");
  LODOP.ADD_PRINT_TEXT(30, 510, 75, 20, "打印时间：");
  LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
  LODOP.SET_PRINT_STYLEA(0, "LinkedItem", "form1");
  LODOP.ADD_PRINT_TEXTA("printNowdate", 30, 593, 135, 20, nowDate === undefined ? 'nowDate' : nowDate);
  LODOP.SET_PRINT_STYLEA(0, "ContentVName", nowDate === undefined ? 'nowDate' : nowDate);
  LODOP.SET_PRINT_STYLEA(0, "LinkedItem", "form1");

  LODOP.ADD_PRINT_TEXTA("pageindex", 8, 681, 45, 20, "第#页");
  LODOP.SET_PRINT_STYLEA(0, "ItemType", 2);
  LODOP.ADD_PRINT_TEXTA("pagesize", 8, 726, 48, 20, "共#页");
  LODOP.SET_PRINT_STYLEA(0, "ItemType", 3);
  LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, '');
  if (BillInfo) {
    LODOP.PREVIEW();
  } else {
    LODOP.PRINT_DESIGN();
  }

};
/**
 * 通用打印接口
 * @param LODOP 打印构建函数
 * @param BillType 单据类型
 * @param Url 单据详情请求地址
 * @param requestData 单据详情请求数据
 * @constructor
 */
Vue.prototype.Print = function (LODOP, BillType, Url, requestData) {
  let vue = this;
  let BillInfo;
  let ListDetail;
  vue.logger('requestData', requestData);
  vue.ajaxPost(Url, requestData, function (result) {
    vue.hideloading();
    if (result != null) {
      if (result.MsgStatus === 1) {
        vue.logger('requestResult', result.Data);
        BillInfo = result.Data.BillInfo === undefined?(result.Data.MasterModel === undefined?result.Data.viewModel:result.Data.MasterModel):result.Data.BillInfo;
        vue.logger('BillInfo', BillInfo);
        ListDetail = result.Data.ListDetail === undefined?result.Data.Details:result.Data.ListDetail;
        vue.ajaxPost("Print/QueryPrintTemplate", {BillType: BillType},
          function (result) {
            console.log("BillTypeResult", result);
            if (result.MsgStatus === 1) {
              let templateDetailsData = result.Data.Details;
              let printContext = "";
              let fontSize = result.Data.MasterModel === null ? 12 : result.Data.MasterModel.FontSize;
              let nowDate = getNowFormatDate();

              if (result.Data.MasterModel !== null) {
                let strStyle = "<style> table,td,th {border-width: 1px;border-style: solid;border-collapse: collapse;font-size:" + fontSize + "px}</style>";
                let detailsTableContext = strStyle + InitTable(ListDetail, templateDetailsData);
                printContext += result.Data.MasterModel.Context;
                printContext += "LODOP.SET_PRINT_MODE('RESELECT_PRINTER',true);";
                printContext += "LODOP.SET_PRINT_MODE('RESELECT_ORIENT',true);";
                printContext += "LODOP.SET_PRINT_MODE('RESELECT_PAGESIZE',true);";
                printContext += "LODOP.SET_PRINT_MODE('RESELECT_COPIES',true);";
                printContext +=  "LODOP.SET_PRINT_MODE('POS_BASEON_PAPER',true);";
                vue.logger('PaperSize', result.Data.MasterModel.PaperType);
                if (result.Data.MasterModel.PaperType === "B190415003") {
                  vue.logger('A5');
                  printContext += "LODOP.SET_PRINT_PAGESIZE(1,2100,1480,'');";
                } else if (result.Data.MasterModel.PaperType === "B190415002") {
                  vue.logger('A4');
                  printContext += "LODOP.SET_PRINT_PAGESIZE(1,2100,2970,'');";
                } else {
                  printContext += "LODOP.SET_PRINT_PAGESIZE(3,2100,45,'');";
                }
                // vue.logger('printContext', printContext);
                printContext += "LODOP.PREVIEW();";
                eval(printContext);
              } else {
                let Title;
                let data = PrintModel.find(item => {
                  return item.Key === BillType;
                }).Value;
                vue.logger('modelData', data);
                let strStyle = "<style> table,td,th {border-width: 1px;border-style: solid;border-collapse: collapse;font-size:" + fontSize + "px}</style>";
                let detailsTableContext = strStyle + InitTable(ListDetail, data.TableData);
                Vue.prototype.PrintModelInit(LODOP, BillType, Title = undefined, BillInfo, detailsTableContext, nowDate);
              }
            } else {
              vue.error(result.Msg);
            }
          }
        );
      } else {
        vue.error(result.Msg);
      }
    }
  }, function () {
    vue.hideloading();
  });

};

/**
 * @return {string}
 */
function InitTable(sheetDetailsData, templateDetailsData) {
  let strHtml = "";
  if (sheetDetailsData.length > 0 && templateDetailsData.length > 0) {
    let totalWidth = 80;
    templateDetailsData.forEach(function (item) {
      if (item.IsPrint) {
        totalWidth += item.Width
      }
    });


    strHtml += "<div id='DivPrint'>";
    strHtml += "<table border=1 cellSpacing=0 cellPadding=1 width='100%'  style='border-collapse:collapse' bordercolor='#333333'>";
    strHtml += "<thead>";
    strHtml += "<tr>";
    strHtml += "<td width='" + 80 / totalWidth * 100 + "%' ><div align='center'>行号</div></td>";

    templateDetailsData.forEach(function (item) {
      if (item.IsPrint) {
        let percentage = item.Width / totalWidth * 100;
        strHtml += "<td width='" + percentage + "%'><div align='center'>" + item.PrintTitle + "</div></td>";
      }
    });

    strHtml += "</tr></thead>";
    strHtml += "<tbody>";
    for (let i = 0; i < sheetDetailsData.length; i++) {
      strHtml += "<tr>";
      strHtml += "<td><div align='center'>" + (i + 1) + "</div></td>";

      templateDetailsData.forEach(function (item) {
        if (item.IsPrint) {
          if (sheetDetailsData[i][item.PrintItem] === "null" || sheetDetailsData[i][item.PrintItem] == null) {
            strHtml += "<td><div align='center'></div></td>";
          } else {
            if (item.PrintItem.indexOf("Amt") !== -1 || item.PrintItem.indexOf("Price") !== -1)// 价格，金额格式化
            {
              strHtml += "<td><div align='center'>" + toDecimal4(sheetDetailsData[i][item.PrintItem]) + "</div></td>";
            } else {
              strHtml += "<td><div align='center'>" + sheetDetailsData[i][item.PrintItem] + "</div></td>";
            }
          }
        }
      });

      strHtml += "</tr>";
    }
    strHtml += "</tbody>";
    strHtml += "<tfoot>";
    strHtml += "<tr>";
    strHtml += "<td>本页小计</td>";

    templateDetailsData.forEach(function (item) {
      if (item.IsPrint) {


        if (item.IsSum) {
          let format = '0';//数值类型
          if (item.PrintItem.indexOf("Amt") !== -1) { //金额类型
            format = '0.0000';
          }
          strHtml += "<td tdata='SubSum' format='" + format + "' align='center' >###</td>";
        } else {
          strHtml += "<td>&nbsp;</td>";
        }
      }
    });

    strHtml += "</tr>";
    strHtml += "<tr>";
    strHtml += "<td>整单合计</td>";

    templateDetailsData.forEach(function (item) {
      if (item.IsPrint) {


        if (item.IsSum) {
          let format = '0';//数值类型
          if (item.PrintItem.indexOf("Amt") !== -1) { //金额类型
            format = '0.0000';
          }
          strHtml += "<td tdata='AllSum' format='" + format + "' align='center' >###</td>";
        } else {
          strHtml += "<td>&nbsp;</td>";
        }
      }
    });

    strHtml += "</tr>";
    strHtml += "</tfoot></table></div>";
  }
  return strHtml;
}

function toDecimal4(x) {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  var f = Math.round(x * 10000) / 10000;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 4) {
    s += '0';
  }
  return s;
}

//获取当前系统时间
function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}




