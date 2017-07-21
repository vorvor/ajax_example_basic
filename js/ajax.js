$(document).ready(function() {
    $('#ajax-magic').on('click', function(e) {
      $.ajax({
        url: 'includes/ajax-response.php', // php to call
        type: 'post', // request method POST or GET
        data: {'some_special_id': '11239528343'}, // data to send send
        success: function (data, status) { // if data sent and request arrived in data variable
            $('#message-arrived-from-server').html(data); // put the data arrived to the message div
        },
        error: function (xhr, desc, err) { // let's handle if something went wrong
          console.log(xhr);
          console.log("Details: " + desc + "\nError:" + err);
        }
      })
    })
})
