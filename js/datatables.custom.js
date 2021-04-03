$(document).ready(function () {
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw();
	});

	$('#myCollapsible').on('shown.bs.collapse', function () {
		$($.fn.dataTable.tables(true)).DataTable().columns.adjust();
	});

	$('.table').DataTable({
		"bProcessing": true,
		"bPaginate": false,
		"bLengthChange": true,
		"scrollX": false,
		"scrollCollapse": false,
		"fixedHeader": true,
		"bFilter": false,
		"bInfo": false,
		"bAutoWidth": true
	});

	$('.table-min').DataTable({
		"bProcessing": true,
		"bPaginate": false,
		"bLengthChange": false,
		"scrollX": false,
		"scrollCollapse": false,
		"fixedHeader": false,
		"bFilter": false,
		"bInfo": false,
		"bAutoWidth": false
	});

	$('.table-auto').DataTable({
		"bProcessing": true,
		"bPaginate": true,
		"bLengthChange": true,
		"iDisplayLength": 10,
		"scrollX": true,
		"scrollY": true,
		"scrollCollapse": true,
		"fixedHeader": false,
		"bFilter": true,
		"bInfo": false,
		"bAutoWidth": false,
		"oLanguage": {
			"sSearch": "Pencarian: ",
			"oPaginate": {
				"sFirst": "<i class='fa fa-fast-backward'></i>",
				"sLast": "<i class='fa fa-fast-forward'></i>",
				"sNext": "<i class='fa fa-forward'></i>",
				"sPrevious": "<i class='fa fa-backward'></i>"
			}
		}
	});

});
