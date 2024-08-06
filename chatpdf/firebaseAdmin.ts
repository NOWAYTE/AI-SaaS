import { initializeApp, getApps, App, getApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceKey = require("@/querydocs-c5cba-firebase-adminsdk-769od-a327cd55d1.json")

let app: App;

if (getApps().length === 0) {
    app = initializeApp({
        credential: cert(serviceKey)
    });
} else {
    app = getApp();
}

const adminDb = getFirestore()

export { app as adminApp, adminDb}