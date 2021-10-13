{
  "globals": {
    "document": false
  }
}

{
  "globals": {
    "document": false
  }
}

new WOW().init();


 var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Red", "Reqd", "Rerd", "Rfed", "Redd", "Reed"],
                    datasets: [{
                        label: '# of Votes', 
                        data: [12,14,3,54,45,5],
                        backgroundColor: [
                            'red',
                            'green',
                            'blue',
                            'yellow',
                            'brown',
                            'orange'],
                            borderColor: [
                            'orange',
                            'blue',
                            'green',
                            'brown',
                            'yellow',
                            'red'],
                        borderWidth: 2
                    }],
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    } 
                }
            })



$(document).ready(function() {
  $('#rateMe1').mdbRate();
});