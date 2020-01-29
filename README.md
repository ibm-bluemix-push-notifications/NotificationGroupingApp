# Notifications grouping

This is a sample app to demonstrate the notifications grouping feature in APNs and FCM using  IBM cloud push service. 

## requirements
- React native
- IBM cloud Push Notifications service instance 
- News API key

## Setup

1. Open the `App.js` file and add the IBM cloud Push Notifications service credentials.
2. Configure the app to receive push notificatons. Follow this [documnetaion](https://github.com/ibm-bluemix-mobile-services/bms-push-react-native)
3. Run the app

## Send push notificayons

Send the following payloads to the apns and see the notifications getting grouped under two categories.

#### Payload - 1
```
{
  "message": {
    "alert": "World breaking news today | U.S. News and Politics‎"
  },
 "settings":{
    "apns":{
        "apnsThreadId":"World news",
    },
    "gcm" : {
        "groupId":"World news"
    }
}
}
```

#### Payload - 2

```
{
  "message": {
    "alert": "World news – breaking news, videos and headlines - CNN‎"
  },
 "settings":{
    "apns":{
        "apnsThreadId":"World news",
    },
    "gcm" : {
        "groupId":"World news"
    }
}
}
```

#### Payload - 3

```
{
  "message": {
    "alert": "Sports News: Latest Cricket News, Live Match Scores & Sports‎"
  },
 "settings":{
    "apns":{
        "apnsThreadId":"Sports news",
    },
    "gcm" : {
        "groupId":"Sports news"
    }
}
}
```

#### Payload - 4

```
{
  "message": {
    "alert": "NDTV Sports: Latest Sports News, Live Scores, Results‎"
  },
 "settings":{
    "apns":{
        "apnsThreadId":"Sports news",
    },
    "gcm" : {
        "groupId":"Sports news"
    }
}
}
```

