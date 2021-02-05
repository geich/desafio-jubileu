FROM mongo

COPY taxesPrices.json /taxesPrices.json
COPY plans.json /plans.json

CMD mongoimport -h db  -d jubileu -c taxesPrices --type json --file /taxesPrices.json --jsonArray && \
mongoimport -h db -d test -d jubileu -c plans --type json --file /plans.json --jsonArray