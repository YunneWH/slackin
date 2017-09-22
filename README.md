# Build and publish a docker image from this repo

    docker build . -t cardstack/slackin
    docker push cardstack/slackin

You don't need to repeat this unless you want to change something, the image is already published.

# Launch on an EC2 instance

Using Amazon Linux:

    sudo yum update -y
    sudo yum install -y docker
    sudo service docker start
    sudo docker run -d --rm --env SLACK_TOKEN=$SLACK_TOKEN --publish 3000:3000 cardstack/slackin

Then create an elastic loadbalancer with an HTTPS cert in front of the ec2 instance.


# Slack Token

Slack calls these "legacy tokens". They are per-user. To get one for your user, make sure you're logged into Slack in your browser and then go to https://api.slack.com/custom-integrations/legacy-tokens

I think Slackin requires that the user whose token you're using is an admin.
