#create build
yarn build
​
# Enable printing executed commands
set x
trap "exit" INT
​
# Get AWS PROFILE, S3 Bucket and CloudFront Id from environment variables  or write it down statically
aws_profile=primaaws
s3_bucket=www.primathon.in
​
echo Profile: $aws_profile
echo S3_Bucket: $s3_bucket
​
if [ -z "$aws_profile" ]; then
  echo AWS_PROFILE not found
  exit
fi
if [ -z "$s3_bucket" ]; then
  echo S3_BUCKET not found
  exit
fi
​
#set env variable for aws cli
export AWS_PROFILE=$aws_profile
​
if [ ! -d "dist" ]; then
    echo "${red}Build folder not found${reset}"
    exit 0;
fi
​
echo Synching Build Folder: $s3_bucket...
aws s3 sync dist/ s3://$s3_bucket --delete --cache-control max-age=31536000,public
