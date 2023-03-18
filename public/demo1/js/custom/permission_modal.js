"use strict";
function KTUsersUpdatePermissions(roleId) {
    let elementName = "kt_modal_update_role_" + roleId;
    let formName = "#kt_modal_update_role_form_" + roleId;
    const t = document.getElementById(elementName),
        e = t.querySelector(formName),
        n = new bootstrap.Modal(t);
    return {
        init: function () {
            (() => {
                var o = FormValidation.formValidation(e, {
                    fields: {
                        role_name: {
                            validators: {
                                notEmpty: {
                                    message: "Role name is required"
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger,
                        bootstrap: new FormValidation.plugins.Bootstrap5({
                            rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: ""
                        })
                    }
                });
                t.querySelector('[data-kt-roles-modal-action_1="close"]').addEventListener("click", (t => {
                    t.preventDefault(),
                        Swal.fire({
                            text: "Are you sure you would like to close?",
                            icon: "warning",
                            showCancelButton: !0,
                            buttonsStyling: !1,
                            confirmButtonText: "Yes, close it!",
                            cancelButtonText: "No, return",
                            customClass: {
                                confirmButton: "btn btn-primary",
                                cancelButton: "btn btn-active-light"
                            }
                        }).then((function (t) {
                            t.value && n.hide()
                        }))
                })),
                    t.querySelector('[data-kt-roles-modal-action_1="cancel"]').addEventListener("click", (t => {
                        t.preventDefault(),
                            Swal.fire({
                                text: "Are you sure you would like to cancel?",
                                icon: "warning",
                                showCancelButton: !0, buttonsStyling: !1,
                                confirmButtonText: "Yes, cancel it!",
                                cancelButtonText: "No, return",
                                customClass: {
                                    confirmButton: "btn btn-primary",
                                    cancelButton: "btn btn-active-light"
                                }
                            }).then((function (t) {
                                t.value ? (e.reset(),
                                    n.hide()) : "cancel" === t.dismiss && Swal.fire({
                                    text: "Your form has not been cancelled!.",
                                    icon: "error", buttonsStyling: !1,
                                    confirmButtonText: "Ok, got it!",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
                                    }
                                })
                            }))
                    }));
                const i = t.querySelector('[data-kt-roles-modal-action_1="submit"]');
                i.addEventListener("click", (function (t) {
                    t.preventDefault(), o && o.validate().then((function (t) {
                        console.log("validated!"),
                            "Valid" == t ? (i.setAttribute("data-kt-indicator", "on"),
                                i.disabled = !0, setTimeout((function () {
                                i.removeAttribute("data-kt-indicator"),
                                    i.disabled = !1,
                                    Swal.fire({
                                        text: "Form has been successfully submitted!",
                                        icon: "success",
                                        buttonsStyling: !1,
                                        confirmButtonText: "Ok, got it!",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    }).then((function (t) {
                                        t.isConfirmed && n.hide()
                                    }))
                            }), 2e3)) : Swal.fire({
                                text: "Sorry, looks like there are some errors detected, please try again.",
                                icon: "error",
                                buttonsStyling: !1,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            })
                    }))
                }))
            })(), (() => {
                const t = e.querySelector("#kt_roles_select_all"),
                    n = e.querySelectorAll('[type="checkbox"]');
                t.addEventListener("change", (t => {
                    n.forEach((e => {
                        e.checked = t.target.checked
                    }))
                }))
            })()
        }
    }
}