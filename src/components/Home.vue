<script>
export default {

    data() {
        return {
            position: null,
            error: null,
        }
    },

    mounted() {
        this.getLocation();
        //this.getDadosChuva();
    },

    methods: {

        getDadosChuva() {
            const token = '64da91beeaa1c30d062783decb2d6e25'
            const latitude = this.position.coords.latitude
            const longitude = this.position.coords.longitude
            const resource = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${token}`;
            this.axios.get(resource).then((response) => {
                console.log(response.data)
        })
        },

        getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
            } else { 
                console.log("Geolocation is not supported by this browser.");
            }
        },
        showPosition(position) {
            this.position = position;
            //this.getDadosChuva();
        },

        showError(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    this.error = "User denied the request for Geolocation."
                    break;
                case error.POSITION_UNAVAILABLE:
                    this.error = "Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    this.error = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    this.error = "An unknown error occurred."
                    break;
            }
        }

    }
}
</script>

<template>
    <div class="card w-50">
        <div class="card-body">
            <div class="row">
                <div class="col-sm">
                    <h5 class="card-title">Previsão do tempo</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <img class="wob_tci" alt="Pancadas leves de chuva" src="//ssl.gstatic.com/onebox/weather/64/rain_light.png" id="wob_tci" data-csiid="KU61ZuzQL87N1sQP_t_4-AQ_13" data-atf="1">
                    <span style="font-weight: bold;font-size: 30px;">19</span><span >&deg;C</span>
                </div>
                <div class="col-sm" style="text-align: end;">
                    <div style="font-weight: bold;">
                        {{ 'Clima' }}
                    </div>
                    <div>
                        {{'Quinta-feira'}}
                    </div>
                    <div>
                        {{'Pancadas de chuva'}}   
                    </div>
                </div>  
            </div>
            <div class="row">
                <div class="col-sm">
                    {{ 'Hoje não é um bom dia para sair com seu velinho' }}
                </div>
            </div>
        </div>
    </div> 
</template>
<style scoped>
.card {
    float: right;
    margin: 10px;
    border: unset;
}

.celcius {
    position: absolute;
    bottom: 53px;
}
</style>
