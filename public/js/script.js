$(document).ready(function(){
  $('.modal').modal();
  $('#signUpModal').modal('open');
  $('#loginModal').modal('open');

  $('#calendar').fullCalendar({
      // locale: 'sv'
      weekNumbers: true,
      height: 720,
      fixedWeekCount: false,
      header: {
        left:   'today prev,next',
        center: 'title',
        right:  'month,basicWeek,agendaDay '
      },
      columnFormat: 'dddd'
    });

});
