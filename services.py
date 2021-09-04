# import os
# import requests

# def get_places():
#     url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=GOOGLE_API_KEY"
#     requestedData = requests.get(url)
#     places = r.json()
#     place_list = []
#     for i in range(len(places['places'])):
#         place_list.append(places['places'][i])
#     return place_list


