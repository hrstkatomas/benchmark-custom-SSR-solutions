# benchmark-custom-SSR-solutions
I would like to benchmark how different runtimes/libraries are performing during SSR task


# bun
```shell
$ time curl -s "http://localhost:3001/?[0-100000]" > /dev/null

real	0m18.883s
user	0m2.149s
sys	0m1.889s
```
```shell
$ curl -s -w 'time_namelookup: %{time_namelookup}\n time_connect: %{time_connect}\n time_appconnect: %{time_appconnect}\n time_pretransfer: %{time_pretransfer}\n time_redirect: %{time_redirect}\n time_starttransfer: %{time_starttransfer}\n time_total: %{time_total}\n' -o /dev/null http://localhost:3001/

 time_namelookup: 0.000017
 time_connect: 0.000384
 time_appconnect: 0.000000
 time_pretransfer: 0.000415
 time_redirect: 0.000000
 time_starttransfer: 0.008986
 
 time_total: 0.009068
```

# deno
```shell
$ time curl -s "http://localhost:8000/?[0-100000]" > /dev/null

real	0m24.024s
user	0m2.173s
sys	0m1.649s
```
```shell
$ curl -s -w 'time_namelookup: %{time_namelookup}\n time_connect: %{time_connect}\n time_appconnect: %{time_appconnect}\n time_pretransfer: %{time_pretransfer}\n time_redirect: %{time_redirect}\n time_starttransfer: %{time_starttransfer}\n time_total: %{time_total}\n' -o /dev/null http://localhost:8000/

 time_namelookup: 0.000019
 time_connect: 0.000681
 time_appconnect: 0.000000
 time_pretransfer: 0.000717
 time_redirect: 0.000000
 time_starttransfer: 0.010725
 
 time_total: 0.010826
```

# node
```shell
$ time curl -s "http://localhost:9080/?[0-100000]" > /dev/null

real	0m24.751s
user	0m2.137s
sys	0m1.640s
```
```shell
$ curl -s -w 'time_namelookup: %{time_namelookup}\n time_connect: %{time_connect}\n time_appconnect: %{time_appconnect}\n time_pretransfer: %{time_pretransfer}\n time_redirect: %{time_redirect}\n time_starttransfer: %{time_starttransfer}\n time_total: %{time_total}\n' -o /dev/null http://localhost:9080/

 time_namelookup: 0.000019
 time_connect: 0.000510
 time_appconnect: 0.000000
 time_pretransfer: 0.000550
 time_redirect: 0.000000
 time_starttransfer: 0.015846
 
 time_total: 0.015947
```