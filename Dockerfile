FROM node:18-alpine
WORKDIR /crashy-mccrashface-main
COPY . .
CMD ["node", "index.js"]
EXPOSE 8081