import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            {
            "timestamp": "2018-01-01T08:00:00Z",
            "created_at": "2017-12-31T17:05:20.098287Z",
            "carbon": 1482.75096836669,
            "genmix": [{"fuel": "other"}]
            }
        ]
    }
});
