$(document).ready(function () {
	$('#table_id').DataTable({
		"language": {
			"lengthMenu": "Отобразить _MENU_ записей",
			"info": "Отображено с _START_ по _END_ запись из _TOTAL_",
			"search": "Поиск:",
			"paginate": {
				"first": "Первая",
				"last": "Последняя",
				"next": "Следующая страница",
				"previous": "Предыдущая страница"
			}
		}
	});
});