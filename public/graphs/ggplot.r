library("httr2")




for(i in c(1:100)){
  req <- request("https://rxcode.ca")
  response <- req_perform(req)
  print(response$status_code)
}