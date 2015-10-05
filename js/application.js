data = [
  { name: "Mark-Paul Gosselaar", photo_url: "" },
  { name: "Delta Burke", photo_url: "img/avatars/delta.png" },
  { name: "Alf", photo_url: "img/avatars/alf.png" },
  { name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
  { name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
  { name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
  { name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
  { name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" }
];
var celebList = {
    init: function() {
        this.updateView();
        this.addNew();
        this.showCloseBtn();
        this.removeCard();
    },

    updateView: function() {
        // update view 
        var celebTemplate = _.template($("#celeb-template").html());
        var htmlTmpl = celebTemplate({
            celebs: data
        });
        $(".celeb-list").html(htmlTmpl);
    },

    addNew: function() {
        // update view after adding new item to list
        var inputName = $('#name');
        var inputPhoto = $('#photo');
        $('#new').submit(function(e) {
            e.preventDefault();
            if (inputPhoto.val().length > 0) {
                data.unshift({
                    name: inputName.val(),
                    photo_url: inputPhoto.val()
                });
            } else {
                data.unshift({
                    name: inputName.val(),
                    photo_url: "img/default.png"
                });
            }
            celebList.updateView();
            celebList.showCloseBtn();
            celebList.removeCard();
        });

    },

    showCloseBtn: function() {
        // show close button
        $('.card').on({
            mouseenter: function() {
                $(this).find('#close-btn').show();
            },
            mouseleave: function() {
                $(this).find('#close-btn').hide();
            }
        });
    },

    removeCard: function() {
        // remove card when close button is clicked
        $('img#close-btn').on('click', function() {
            var test = $(this).parent('.card').remove();
        });
    }

};

$(document).ready(function() {
    celebList.init();
});
