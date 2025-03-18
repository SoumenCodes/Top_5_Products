# Docker Setup Guide for Running top-products Backend and PostgreSQL

## **Step 1: Stop Any Existing Containers**

To check running containers:

```sh
docker ps
```

To stop and remove the backend container:

```sh
docker stop express_backend
docker rm express_backend
```

To stop and remove the PostgreSQL container:

```sh
docker stop my_postgres
docker rm my_postgres
```

---

## **Step 2: Prune Unused Containers and Networks (Optional)**

To clean up unused containers, networks, and images:

```sh
docker system prune -a
```

---

## **Step 3: Rebuild and Start Containers**

Navigate to the project folder and start your containers using `docker-compose`:

```sh
cd "C:\D Drive\New Full Stack Projects\top-products"
docker-compose up --build
```

---

## **Step 4: Verify Running Containers**

Check if your containers are running:

```sh
docker ps
```

Expected output:

- `express_backend` running on port `3000`
- `my_postgres` running on port `5432`

---

## **Step 5: Debug if Port 3000 is Already in Use**

If you get the `EADDRINUSE` error:

Find which process is using port `3000`:

```sh
netstat -ano | findstr :3000
```

Force kill the process (replace `<PID>` with the actual Process ID found in the previous step):

```sh
taskkill /PID <PID> /F
```

Then try running `docker-compose up --build` again.

---

## **Step 6: Check Logs for Debugging**

If the backend is not working, check logs:

```sh
docker logs express_backend
```

If PostgreSQL is not working, check logs:

```sh
docker logs my_postgres
```

---

## **Step 7: Stop and Remove All Containers (If Needed)**

If you want to stop and remove all running containers:

```sh
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
```

Then rebuild using `docker-compose up --build`.

---

### Now your project should be running successfully! 🚀
