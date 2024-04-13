'use strict'

document.addEventListener('DOMContentLoaded', () => {
    class FeedbackForm {
        formData = null;
        formElement = null;
        callSection = null;
        requestSection = null;
        activeSection = null;
        callTimeElement = null;
        timeElement = null;
        dateElement = null;
        concreteTimeValue = '3';

        constructor() {
            this.formElement = document.getElementById('feedbackForm')
            this.requestSection = document.getElementById('requestSection');
            this.callSection = document.getElementById('callSection');
            this.applicationSent = document.getElementById('feedbackApplicationSent');
            this.formTypeElement = document.getElementById('id_form_type');
            this.callTimeElement = document.getElementById('id_call_time');
            this.timeElement = document.getElementById('id_time');
            this.dateElement = document.getElementById('id_date');
            this.init();
        }

        init() {
            this.initFormData();
            this.initFormType();
            this.initSection(this.callSection);
            this.initFileField();
            this.initCallTime();
            this.initSubmit();
            this.initPhone();
        }

        initFormData() {
            this.formData = new FormData(this.formElement);
        }

        initFormType() {
            this.formTypeElement.addEventListener('change', (ev) => {
                ev.preventDefault();
                this.toggleSection();
            });
        }

        initFileField() {
            $("input[type='file']").change(function () {
                const html = `${this.value.replace(/C:\\fakepath\\/i, '')} <a href="#">x</a>`
                $('#attachmentFile').html(html);
            })
        }

        initCallTime() {
            document.querySelectorAll('[name="call_time"]').forEach(el => {
                el.addEventListener('change', ev => {
                    let disabled = true;
                    if (ev.currentTarget.value === this.concreteTimeValue && ev.currentTarget.checked) {
                        disabled = false;
                    }
                    this.toggleDateTime(disabled);
                });
            });
        }

        initSubmit() {
            this.formElement.addEventListener('submit', (ev) => {
                ev.preventDefault();
                this.submit();
                this.requestSection.style.display = 'none';
                this.callSection.style.display = 'none';
                this.applicationSent.style.display = 'block';
            });
        }

        initPhone() {
            document.querySelectorAll('#id_phone').forEach(el => {
                el.addEventListener('input', ev => {
                    ev.currentTarget.value = `+${ev.currentTarget.value.replace(/[^0-9.]/g, '')}`
                });
            });
        }

        addMessages(message) {
            this.resetMessages();
            $(`#${this.activeSection.id} .messages`).html(message);
        }

        resetMessages() {
            $('.messages').html('');
        }

        submit() {
            const _this = this;
            const form = _this.formElement

            _this.toggleButtons();
            _this.duplicatePhone();
            _this.resetMessages();
            
            $.post(form.action, $(form).serialize())
                .done(data => {
                    form.reset();
                    _this.toggleSection();
                }).fail(data => {
                console.log(data.responseJSON);
                if (data.responseJSON && data.responseJSON.phone) {
                    _this.addMessages(data.responseJSON.phone);
                }
            }).always(data => {
                _this.toggleButtons();
            });
        }

        toggleSection() {
            [this.callSection.hidden, this.requestSection.hidden] = [this.requestSection.hidden, this.callSection.hidden];
            this.initSection(this.callSection.hidden ? this.requestSection : this.callSection);
        }

        initSection(section, activate = true) {
            if (!this.activeSection) {
                this.activeSection = this.requestSection;
            }
            const fields = [
                ...section.querySelectorAll('input:not([type="radio"]):not([type="file"])'),
                ...section.querySelectorAll('select'),
                ...section.querySelectorAll('textarea'),
            ];
            for (const field of fields) {
                field.required = activate;
            }
            if (activate) {
                this.initSection(this.activeSection, false)
                this.activeSection = section;
            }
        }

        toggleDateTime(disabled) {
            this.dateElement.disabled = disabled;
            this.timeElement.disabled = disabled;
        }

        toggleButtons() {
            this.formElement.querySelectorAll('button[type="submit"]').forEach(el => {
                el.disabled = !el.disabled;
            });
        }

        duplicatePhone() {
            const value = this.formElement.querySelector('#id_phone[required]').value;
            this.formElement.querySelector('#id_phone:not([required])').value = value;
        }
    }

    function initFeedbackForm() {
        new FeedbackForm();
    }

    initFeedbackForm();
});
