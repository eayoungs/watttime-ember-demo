import Component from '@ember/component';

export default Component.extend({
    willRender() {
        this.set('results',
                {
                    "timestamp": "2018-01-01T08:00:00Z",
                    "created_at": "2017-12-31T17:05:20.098287Z",
                    "carbon": 1482.75096836669,
                    "genmix": [
                        {
                            "fuel": "other",
                            "gen_MW": 12249.5
                        },
                        {
                            "fuel": "solar",
                            "gen_MW": 0
                        },
                        {
                            "fuel": "wind",
                            "gen_MW": 142.5
                        },
                    ],
                    "url": "https://api.watttime.org/api/v1/datapoints/17969688/",
                    "market": "DAHR",
                    "freq": "1hr",
                    "ba": "CAISO"
                }
            )
    }
});
