$(document).ready(function () {
    if ($(".inputMaterial").val() != "") {
        $(".inputMaterial").addClass("valid");
    } else {
        $(".inputMaterial").removeClass("valid");
    }
    $(".inputMaterial").blur(function () {
        if($(this).val() !="") {
            $(this).addClass("valid");
        } else {
            $(this).removeClass("valid");
        }
    })
    /*----------- Start datepicker -----------*/

    $('#MyDate').datepicker({
        language: 'en',
        multipleDatesSeparator: " - ",
        autoClose: true
    });
    /*----------- End datepicker -----------*/
    /*-------------- Start progress bar content --------------*/
    /*-------------- End progress bar content --------------*/
    /*----------- Start tiny toggle -----------*/
    $(".tiny-toggle").tinyToggle({
        onCheck: function () { $("input[name=thing]").attr('checked', "checked"); },
        onUncheck: function () { $("input[name=thing]").removeAttr("checked") },

    });

/*----------- End tiny toggle -----------*/
        function CheckFieldIsEmpty(element) {
        if($(element).val() != "") {
            $("#delete-text-before-field").removeClass("d-none");
        } else {
            $("#delete-text-before-field").addClass("d-none");
        }
    }
    $(".field-Username-page-user-add").keyup(function () {
        CheckFieldIsEmpty($(this))
    })
    $("#delete-text-before-field").click(function ()  {
        
        $(this).prevAll("input").val("");
        if($(".field-Username-page-user-add").val() != "") {
            $("#delete-text-before-field").removeClass("d-none");
        } else {
            $("#delete-text-before-field").addClass("d-none");
        }
    })
    $(".field-password-page-add-user").keyup(function () {
        if($(".field-password-page-add-user").attr("type") == "password") {
            $("#icon-show-password").removeClass("d-none");
            $("#icon-hide-password").addClass("d-none");
        } else {

            $("#icon-show-password").addClass("d-none");
            $("#icon-hide-password").removeClass("d-none");
        }
    });
    $("#icon-show-password").click(function () {
        $(".field-password-page-add-user").attr("type", "text");
        $(this).addClass("d-none");
        $("#icon-hide-password").removeClass("d-none");
    });
    $("#icon-hide-password").click(function () {
        $(".field-password-page-add-user").attr("type", "password");
        $(this).addClass("d-none");
        $("#icon-show-password").removeClass("d-none");
    });
    /*----------- Start UploadFile ----------------*/
    
    $('.custom-file-input').on('change',function(event){
        var files = event.target.files;
        console.log(files);
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            $('.custom-file-label').addClass("selected").html(file.name);
            console.log(file)
        }
    });

    $(".custom-file").click(function () {
        $(".custom-file-input").click();
    })
    /*----------- End UploadFile ----------------*/
    /*----------- Start Datatable ----------------*/
    if ($(window).width() >= 1365) {
        datatableX('#requestTable', false);
        datatableX('#requestTable2', false);
        datatableX('#requestTable3', false);
    } else {
        datatableX('#requestTable', true);
        datatableX('#requestTable2', true);
        datatableX('#requestTable3', true);
    }
    $(window).resize(function () {
        if ($(window).width() >= 768) {
        } else if ($(window).width() <= 768) {
        }
    });
    $(window).scroll(function () {
        $(".fixedHeader-floating").css("top", $(".navbar").innerHeight());
    })
    function datatableX(tableName, responsiveX) {
        var table = $(tableName).DataTable({
           "ordering": false,
            fixedHeader: true,
            responsive: responsiveX,
            "autoWidth": true,
            "language": {
                "sZeroRecords": "لم يعثر على أية سجلات",
                "loadingRecords": "جارٍ التحميل...",
                "info": "عرض _START_ الي _END_ من اجمالي _TOTAL_ ",
                "sInfoEmpty": "يعرض 0 إلى 0 من أصل 0 سجل",
                "sInfoFiltered": "(مصفي من اجمالي _TOTAL_ مدخلات)",
                "sInfoPostFix": "",
                "sSearch": "ابحث:",
                "sUrl": "",
                "paginate": {
                    "previous": "<i class='material-icons'>keyboard_arrow_left</i>",
                    "next": "<i class='material-icons'>keyboard_arrow_right</i>",
                    "first": "الاول",
                    "last": "الاخير"
                },
                "lengthMenu": '<select>' +
                    '<option value="10">10</option>' +
                    '<option value="20">20</option>' +
                    '<option value="30">30</option>' +
                    '<option value="-1">All</option>' +
                    '</select> :الصفوف بالصفحه',
            },
            "pagingType": "simple"
        });



        // table filter 
        $('.field-search-user-name').on('keyup', function () {
            table.columns(1).search(this.value).draw();
        });
        $('.field-search-email').on('keyup', function () {
            table.columns(2).search(this.value).draw();
        });
        //$('.field-search-job-title').on('keyup', function () {
        //    table.columns(7).search(this.value).draw();
        //});
        $('.select-search-User-role').on('change', function () {
            table.columns(6).search(this.value).draw();
        });
        $(".select-search-user-status").on('change', function () {
            table.columns(10).search(this.value).draw();
        });
        $(".select-search-Facilities").on('change', function () {
            table.columns(8).search(this.value).draw();
        });
        $(".select-search-Projects").on('change', function () {
            table.columns(9).search(this.value).draw();
        });

        $(".select-search-Projects").on('change', function () {
            table.columns(9).search(this.value).draw();
        });


        /*----------- Start datepicker -----------*/

        $('#timepicker-actions-exmpl').datepicker({
            language: 'en',
            multipleDatesSeparator: " - ",
            autoClose: true,
            onSelect: function onSelect(fd, date) {
                table.columns(11).search(fd).draw();
            }
        });
    /*----------- End datepicker -----------*/
    }



    $('#field-search-memo-index2').keyup(function () {
        table.search($(this).val()).draw();

    });



    $('.selectpicker').selectpicker();
    /*----------- End Datatable ----------------*/


    // start show password and hide
    function showPassword() {
        var prev = document.getElementById("password");
        if (prev.type === "password") {
            prev.type = "text";
            $(".view").removeClass().addClass("eye-slash");
        } else {
            prev.type = "password";
            $(".eye-slash").removeClass().addClass("view");
        }
    }
    // start remove or reset data input
    function removeData() {
        document.getElementById("myForm").reset();
    };

    $('#Reset').on('click', function (e) {

        location.reload();

    });



});
$(window).on("load", function () {
        // start progress bar
        $('.progress .progress-bar').each(function() {
            $(this).animate({ width: $(this).attr('aria-valuenow') + "%"  }, 50);
        });
});