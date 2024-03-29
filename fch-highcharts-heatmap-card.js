
const ID = '0.0.1'; 
import Highcharts from './highcharts/es-modules/masters/highcharts.src.js';
import './highcharts/es-modules/masters/modules/heatmap.src.js';
import './highcharts/es-modules/masters/modules/boost.src.js';
import './highcharts/es-modules/masters/modules/boost-canvas.src.js';

const DEFAULT_CHART_HEIGHT = 300;
const DEFAULT_CHART_HEIGHT_TITLED = DEFAULT_CHART_HEIGHT + 52;
const darkTheme = {
    chart: {
        backgroundColor: 'transparent'        
    },
    title: {
        style: {
            color: '#A0A0A3',
            'font-family': 'var(--paper-font-body1_-_font-family)',
            '-webkit-font-smoothing': 'var(--paper-font-body1_-_-webkit-font-smoothing)',
            'font-size': 'var(--paper-font-body1_-_font-size)',
            'font-weight': 'var(--paper-font-body1_-_font-weight)',
            'line-height': 'var(--paper-font-body1_-_line-height)'
        }
    },
    xAxis: {
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    yAxis: {
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    colorAxis: {
        labels: {
            style: {
                color: '#E0E0E3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#F0F0F3'
            }
        }
    },
    legend: {
        backgroundColor: 'transparent',
        itemStyle: {
            color: '#FFF'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        },
        title: {
            style: {
                color: '#C0C0C0'
            }
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    }
};

const DEFAULT_COLORS = [
    [0, '#3060cf'],
    [0.5, '#fffbbc'],
    [0.9, '#c4463a'],
    [1, '#c4463a']
];

const OUTDOOR_TEMP_COLORS = [
    [0, '#0f3489'],
    [0.357142857, '#595ea3'],
    [0.476190476, '#7374b0'],
    [0.535714286, '#7374b0'],
    [0.619047619, '#F5F5F5'],
    [0.678571429, '#F5F5F5'],
    [0.738095238, '#ea755a'],
    [0.833333333, '#cf0000'],  
    [1, '#5b0f8c']
];

const INDOOR_TEMP_COLORS = [
    [0, '#0f3489'],
    [0.25, '#595ea3'],
    [0.375, '#7374b0'],
    [0.5, '#F5F5F5'],
    [0.625, '#F5F5F5'],
    [0.75, '#ea755a'],
    [1, '#cf0000']
];

const BLUE_GREEN_COLORS = [
    [0, '#edf8fb'],
    [0.25, '#b2e2e2'],
    [0.5, '#66c2a4'],
    [0.75, '#2ca25f'],
    [1, '#006d2c']
];

const BLUE_PURPLE_COLORS = [
    [0, '#edf8fb'],
    [0.25, '#b3cde3'],
    [0.5, '#8c96c6'],
    [0.75, '#8856a7'],
    [1, '#810f7c']
];

const RED_PURPLE_COLORS = [
    [0, '#feebe2'],
    [0.25, '#fbb4b9'],
    [0.5, '#f768a1'],
    [0.75, '#c51b8a'],
    [1, '#7a0177']
];

const YELLOW_BROWN_COLORS = [
    [0, '#ffffd4'],
    [0.25, '#fed98e'],
    [0.5, '#fe9929'],
    [0.75, '#d95f0e'],
    [1, '#993404']
];

const IRON_RED_COLORS = [
    [0, '#230382'],
    [0.1, '#921C96'],
    [0.25, '#C93F55'],
    [0.4, '#DF6D2D'],
    [0.6, '#EFB03D'],
    [0.75, '#F9DE52'],
    [1, '#F5F5D4']
];

const STOP_LIGHT_COLORS = [
    [0, '#6d9b17'],
    [0.5, '#fde74c'],
    [1, '#cf0000']
];

const WHITE_HOT_COLORS = [
    [0, '#242124'],
    [1, '#F5F5F5']
]

const BLACK_HOT_COLORS = [
    [0, '#F5F5F5'],
    [1, '#242124']
]

const BLUE_COLORS = [
    [0, '#edf8fb'],
    [1, '#003E6D']
];


const RED_COLORS = [
    [0, '#feebe2'],
    [1, '#C91628']
];


const GREEN_COLORS = [
    [0, '#E2FFEA'],
    [1, '#1C8C16']
];

const CO2_COLORS = [
    [0, '#6d9b17'],
    [0.193548387, '#FFBF00'],
    [0.35483871, '#cf0000'],
    [1, '#5b0f8c']
];

const PM25_COLORS = [
    [0, '#6d9b17'],
    [0.25, '#FFBF00'],
    [0.5, '#cf0000'],
    [1, '#5b0f8c']
];

const COLORS = {
    'default': DEFAULT_COLORS,
    outdoor_temperature: OUTDOOR_TEMP_COLORS,
    indoor_temperature: INDOOR_TEMP_COLORS,
    blue_green: BLUE_GREEN_COLORS,
    blue_purple: BLUE_PURPLE_COLORS,
    red_purple: RED_PURPLE_COLORS,
    yellow_brown: YELLOW_BROWN_COLORS,
    iron_red: IRON_RED_COLORS,
    stop_light: STOP_LIGHT_COLORS,
    white_hot: WHITE_HOT_COLORS,
    black_hot: BLACK_HOT_COLORS,
    blue: BLUE_COLORS,
    red: RED_COLORS,
    green: GREEN_COLORS,
    co2: CO2_COLORS,
    pm25: PM25_COLORS
};

const RANGES = {
    outdoor_temperature: {
        min: -30,
        max: 54
    },
    indoor_temperature: {
        min: 12,
        max: 28
    },
    co2: {
        min: 520,
        max: 3000
    },
    pm25: {
        min: 0,
        max: 100
    }
}

class FchHeatmapCard extends HTMLElement {

    set hass(hass) {
        if (hass.themes.darkMode !== this.darkMode) {
            if (hass.themes.darkMode && this.hass_inited) {
                this.myChart.update(darkTheme);
            }
        }
        if (! this.hass_inited) {
            this.meta = this.populate_meta(hass);
            this.darkMode = hass.themes.darkMode;
            if (!this.content) {
                this.innerHTML = `
                <ha-card header="${this.meta.headerTitle}">
                    <div class="card-content">
                        <div id="container" style="height: ${this.meta.chartHeight}px;"></div>
                    </div>
                </ha-card>
                `;
                this.content = this.querySelector("div");
                this.container = this.querySelector("div#container");
            }
            if (this.meta.headerTitle) {
                this.querySelector("ha-card").setAttribute('header', this.meta.headerTitle);
            }

            this.hass_inited = true;
            this.get_recorder(hass, [this.config.entity], this.config.days).then(data => {
                this.myChart = Highcharts.chart(this.container, {
                    credits: {
                        enabled: true
                    },
                    chart: {
                        type: 'heatmap',
                        inverted: false
                    },
                
                    title: {
                        text: this.meta.chartTitle
                    },

                    xAxis: {
                        tickPixelInterval: 80,
                        gridLineWidth: 0,
                        type: 'datetime',
                        reversed: false,
                        min: data[0][0],
                        max: data[data.length - 1][0]
                    },
                
                    yAxis: {
                        gridLineWidth: 0,
                        type: 'linear',
                        title: {
                            text: null
                        },
                        labels: {
                            formatter: function () {
                                return this.value + 0.5 + ':00';
                            }
                        },
                        lineWidth: 1,
                        minPadding: 0,
                        maxPadding: 0,
                        startOnTick: false,
                        endOnTick: true,
                        tickPositions: [-0.5, 5.5, 11.5, 17.5, 23.5],
                        tickWidth: 1,
                        min: 0,
                        max: 23
                    },

                    boost: {
                        useGPUTranslations: true
                    },
                
                    colorAxis: {
                        gridLineWidth: 0,
                        stops: this.meta.data.colors,
                        min: this.meta.data.min,
                        max: this.meta.data.max,
                        endOnTick: false,
                        startOnTick: false
                    },
                
                    series: [{
                        boostThreshold: 100,
                        borderWidth: 0,
                        nullColor: '#EFEFEF',
                        colsize: 24 * 36e5, // one day
                        rowsize: 1,
                        tooltip: {
                            headerFormat: 'Value<br/>',
                            pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value:.1f} ' + this.meta.unit_of_measurement + '</b>'
                        },
                        data: data
                    }],
                    time: {
                        useUTC: false
                    }
                });
                if (hass.themes.darkMode) {
                    this.myChart.update(darkTheme);
                }
            });
        }
    }

    setConfig(config) {
        if (!config.entity) {
            throw new Error("You need to define an entity");
        }
        if (config.days && config.days <= 0) {
            throw new Error("`days` need to be 1 or higher");
        }
        var cit = config.titleInChart ?? true;
        this.config = {
            'title': config.title,
            'days': (config.days ?? 21),
            'entity': config.entity,
            'data': (config.data ?? {}),
            'display': (config.display ?? {}),
            'chartHeight': (config.chartHeight ?? (cit ? DEFAULT_CHART_HEIGHT_TITLED : DEFAULT_CHART_HEIGHT)),
            'titleInChart': cit
        };
        if (this.config.data.max !== undefined && 
            (this.config.data.max !== 'auto' && 
            typeof(this.config.data.max) !== 'number')
        ) {
            throw new Error("`data.max` need to be either `auto` or a number");
        }
        if (this.config.data.min !== undefined && 
            (this.config.data.min !== 'auto' && 
            typeof(this.config.data.min) !== 'number')
        ) {
            throw new Error("`data.min` need to be either `auto` or a number");
        }
        this.hass_inited = false;
    }

    getCardSize() {
        return Math.round(this.config.chartHeight / 50.0) + (this.config.titleInChart ? 0 : 1);
    }

    get_recorder(hass, consumers, days) {
        const now = new Date();
        this.grid_status = undefined;
        var startTime = new Date(now - (days * 86400000))
        startTime.setHours(0, 0, 0, 0);
        return hass.callWS({
            'type': 'recorder/statistics_during_period',
            'statistic_ids': consumers,
            "period":"hour",
            "units": {
                "energy":"kWh",
                "temperature": hass.config.unit_system.temperature
            },
            "start_time": startTime.toISOString(),
            "types":["sum", "mean"]
        }).then(recorderResponse => {
            for (const consumer of consumers) {
                const consumerData = recorderResponse[consumer];
                if (consumerData === undefined) {
                    this.grid = [];
                    this.grid_status = hass.localize('ui.components.data-table.no-data');
                    continue;
                }
                if ((this.config.data.max === undefined || this.config.data.max === 'auto') && this.meta.data.max === undefined) {
                    this.meta.data.max = this.max_from(consumerData)
                }
                if ((this.config.data.min === undefined || this.config.data.min === 'auto') && this.meta.data.min === undefined) {
                    this.meta.data.min = this.min_from(consumerData)
                }
                return this.getData(consumerData);
            }
        });
    }

    getData(hassData) {
        var data = [];
        hassData.forEach(record => {
            var r = [];
            var d = new Date(record.start);
            var h = new Date(record.start);
            d.setHours(0, 0, 0, 0);
            r.push(d.getTime());
            r.push(h.getHours());
            r.push(record.mean);
            data.push(r);
        });
        return data;
    }

    max_from(grid) {
        var vals = [];
        for (const entry of grid) {
            vals = vals.concat(entry.mean);
        }
        return Math.max(...vals);
    }

    min_from(grid) {
        var vals = [];
        for (const entry of grid) {
            vals = vals.concat(entry.mean);
        }
        return Math.min(...vals);
    }

    populate_meta(hass) {
        const consumerAttributes = hass.states[this.config.entity].attributes;
        const device_class = (consumerAttributes.device_class ?? this.config.device_class);
        var colors = DEFAULT_COLORS;
        var min = undefined;
        var max = undefined;
        var chartHeight = this.config.chartHeight;
        if (this.config.data && this.config.data.colors) {
            if (typeof(this.config.data.colors) === 'string') {
                colors = COLORS[this.config.data.colors];
                var r = RANGES[this.config.data.colors];
                if (r) {
                    min = r.min;
                    max = r.max;
                }
            } else if (typeof(this.config.data.colors) === 'object' && Array.isArray(this.config.data.colors)) {
                colors = [];
                for (let i = 0; i < this.config.data.colors.length; i++) {
                    colors.push([...this.config.data.colors[i]]);
                }
            }
        }
        if (this.config.data.min !== undefined) {
            min = this.config.data.min;
        }
        if (this.config.data.max !== undefined) {
            max = this.config.data.max;
        }
        if (this.config.data.invert_colors) {
            var na = [];
            var l = colors.length;
            for (let i = l - 1; i >= 0; i--) {
                na.push([Math.abs(colors[i][0] - 1), colors[i][1]]);
            }
            colors = na;
        }
        var title = (this.config.title ?? (this.config.title === null ? undefined : consumerAttributes.friendly_name));
        var meta = {
            'unit_of_measurement': consumerAttributes.unit_of_measurement,
            'state_class': consumerAttributes.state_class,
            'device_class': device_class,
            'language': hass.selectedLanguage ?? hass.language ?? 'en',
            'title': title,
            'headerTitle': this.config.titleInChart ? '' : title,
            'chartTitle': this.config.titleInChart ? title : undefined,
            'data': {
                'max': max,
                'min': min,
                'colors': colors
            },
            'chartHeight': chartHeight
        };
        return meta;
    }
};
console.info("%c fch-highcharts-heatmap-card %c ".concat(ID, " "), "color: white; background: coral; font-weight: 700;", "color: coral; background: white; font-weight: 700;");
customElements.define("fch-highcharts-heatmap-card", FchHeatmapCard);
