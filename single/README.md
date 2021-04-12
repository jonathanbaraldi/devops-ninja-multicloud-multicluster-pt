# DevOps Ninja Multi-Cluster Manifests Example


```sh
$ kubectl -n jonjon run cockroachdb -it \
  --image=cockroachdb/cockroach:v20.2.4 \
  --rm \
  --restart=Never \
  -- sql \
  --insecure \
  --host=cockroachdb.jonjon.svc.cluster.local
```











