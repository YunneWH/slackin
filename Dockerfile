FROM node:8.5
RUN npm install -g slackin@0.13.0
CMD slackin --interval 600000 cardstack $SLACK_TOKEN
EXPOSE 3000
