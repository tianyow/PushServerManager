$(function () {

	// Tooltip
  $('[data-toggle="tooltip"]').tooltip()

  // File Upload
  $('input[type="file"]').change(function(e){
  	var fileName = e.target.files[0].name;
  	$('.custom-file-label').html(fileName);
  });

  // App 註冊與設定 toggle
  $('.btn-app-setting').click(function(e){
  	e.preventDefault();
  	$('.property-panel.side-panel').toggleClass('open');
  	$('.panel-mask').show();
  });
  
  // 歷史訊息查詢 Panel Toggle
  $('.btn-history-search-setting').click(function(e){
  	e.preventDefault();
  	$('.history-search-panel.side-panel').toggleClass('open');
  	$('.panel-mask').show();
  });

  // 統計報表查詢 Panel Toggle
  $('.btn-stastic-query').click(function(e){
  	e.preventDefault();
  	$('.stastic-report-panel.side-panel').toggleClass('open');
  	$('.panel-mask').show();
  });

  // 關閉 Panel
  $('.btn-close-panel').click(function(e){
  	e.preventDefault();
  	$('.side-panel').removeClass('open');
  	$('.panel-mask').hide();
  });
  $('.panel-mask').click(function(e){
  	e.preventDefault();
  	$('.side-panel').removeClass('open');
  	$(this).hide();
  })
})

/* DataTable 英翻中
--------------------------------------------------------------------- */
var qryTableOptions = {
  paging: true,
  lengthChange: false,
  searching: false,
  pageLength: 20,
  ordering: false,
  language: 
  {
    "emptyTable":     "目前無任何資料",
    "info":           "檢視 _START_ to _END_ of _TOTAL_ 資料",
    "info":           "共 _TOTAL_ 筆",
    "infoEmpty":      "無相關資料",
    "infoFiltered":   "(在 _MAX_ 筆資料中找到)",
    "infoPostFix":    "",
    "thousands":      ",",
    "lengthMenu":     "檢視 _MENU_ 筆",
    "loadingRecords": "載入中...",
    "processing":     "處理中...",
    "search":         "搜尋:",
    "zeroRecords":    "無相關結果",
    "paginate": {
        "first":      "第一筆",
        "last":       "最後一筆",
        "next":       ">",
        "previous":   "<"
    }
  },
  "order": [],
    "columnDefs": [ {
      "targets"  : 'no-sort',
      "orderable": false,
    }]
}

/* 細項展開
--------------------------------------------------------------------- */
$(document).ready(function() {  
  var table = $('#historyMsgQueryTable');

  var pushDetail =
  '<tr class="subContentTable_wrap">'+
    '<td colspan="13">'+
      '<table class="subContentTable">'+
        '<tr>'+
          '<td></td>'+
          '<td>已讀</td>'+
          '<td>未讀</td>'+
          '<td>失敗</td>'+
        '</tr>'+
        '<tr>'+
          '<td>iOS</td>'+
          '<td class="success">1,900,000</td>'+
          '<td class="success">100,000</td>'+
          '<td class="fail">11</td>'+
        '</tr>'+
        '<tr>'+
          '<td>Android</td>'+
          '<td class="success">1,800</td>'+
          '<td class="success">200</td>'+
          '<td class="fail">5</td>'+
        '</tr>'+
        '<tr class="row-push-total">'+
          '<td>總計</td>'+
          '<td colspan="3">1,900,000</td>'+
        '</tr>'+
      '</table>'+
    '</td>'+
  '</tr>';

  $('#historyMsgQueryTable .row-toggle').on('click', function(e) {
  	e.preventDefault();
    var $this = $(this);
    var tr = $this.closest('tr');
    var $target =  tr.next('.subContentTable_wrap');

    if ($target.is(":visible")) {
      $target.remove();
      tr.removeClass('shown');
      $this.css('transform', 'none');
    } else {
      tr.after(pushDetail);
      tr.addClass('shown');
      $this.css('transform', 'rotate(90deg)');
    }
  })
});

/* 行事曆
--------------------------------------------------------------------- */
var opt = {
   //dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
   dayNamesMin:["日","一","二","三","四","五","六"],
   monthNames:["1","2","3","4","5","6","7","8","9","10","11","12"],
   monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],
   //monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
   prevText:"上月",
   nextText:"次月",
   weekHeader:"週",
   showMonthAfterYear:true,
   dateFormat:"yy/mm/dd",
   changeYear: true,
   changeMonth: true
   };

$(".datepicker").datepicker(opt);