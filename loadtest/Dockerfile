FROM loadimpact/k6:0.26.1

ENV SCRIPT integration/Sample.API.E2E.js
COPY ./ /
WORKDIR /
ENTRYPOINT [] # override the base image so we can run scripts inside the container
CMD ["sh", "-c", "k6 run $SCRIPT"]