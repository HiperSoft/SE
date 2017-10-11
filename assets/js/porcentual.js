$(document).ready(function() {
    $('#demo-pie-1').pieChart({
        barColor: '#3bb2d0',
        trackColor: '#eee',
        lineCap: 'round',
        lineWidth: 8,
        onStep: function(from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });
});