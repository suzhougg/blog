$(document).ready(function () {

    (function ($) {
        "use strict";
        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
        }, "请输入正确的回答 -_-");

        // 验证表单的正确性
        $(function () {
            $('#contactForm').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    subject: {
                        required: true,
                        minlength: 4
                    },
                    number: {
                        required: true,
                        minlength: 5
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 8
                    }
                },
                messages: {
                    name: {
                        required: "拜托，你有名称吧，对吧？",
                        minlength: "你的名字至少要包含2个字符"
                    },
                    subject: {
                        required: "拜托，你有主题吧，对吧？",
                        minlength: "你的主题至少要包含4个字符"
                    },
                    number: {
                        required: "拜托，你有号码吧，对吧？",
                        minlength: "你的号码至少要包含5个字符"
                    },
                    email: {
                        required: "没有邮箱就不能发送消息哦"
                    },
                    message: {
                        required: "嗯...是的，你得写点什么才能发送这个表单。",
                        minlength: "就这些吗？真的吗？再输入一些吧~"
                    }
                },
                submitHandler: function (form) {
                    $(form).ajaxSubmit({
                        type: "POST",
                        data: $(form).serialize(),
                        url: "contact_process.php",
                        success: function () {
                            $('#contactForm :input').attr('disabled', 'disabled');
                            $('#contactForm').fadeTo("slow", 1, function () {
                                $(this).find(':input').attr('disabled', 'disabled');
                                $(this).find('label').css('cursor', 'default');
                                $('#success').fadeIn()
                                $('.modal').modal('hide');
                                $('#success').modal('show');
                            })
                        },
                        error: function () {
                            $('#contactForm').fadeTo("slow", 1, function () {
                                $('#error').fadeIn()
                                $('.modal').modal('hide');
                                $('#error').modal('show');
                            })
                        }
                    })
                }
            })
        })

    })(jQuery)
})