import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Log, Severity, User } from "../../../shared/models/index";
import { UserSessionService } from "../../../core/services/application/user-session.service";
@Injectable()
export class LoggerService {
  private basePath: string = "/log";
  // private userName: string;
  private angularFirestoreCollection: AngularFirestoreCollection<Log>;
  private Logs: Observable<Log[]>;

  Logs$: Observable<Log[]>;
  LogsAngularFirestoreCollection: AngularFirestoreCollection<Log>;
  constructor(
    private db: AngularFirestore,
    private userSession: UserSessionService
  ) {
    // this.userName = this.userSession.getUserName();
  }
  private;
  public Verbose(string, description: string): void {
    this.db.collection(this.basePath).add({
      userName: this.userSession.getUserName(),
      description: description,
      timeStamp: new Date(),
      severity: Severity[Severity.Verbose]
    });
  }
  public Debug(description: string): void {
    this.db.collection(this.basePath).add({
      userName: this.userSession.getUserName(),
      description: description,
      timeStamp: new Date(),
      severity: Severity[Severity.Debug]
    });
  }
  public Information(description: string): void {
    this.db.collection(this.basePath).add({
      userName: this.userSession.getUserName(),
      description: description,
      timeStamp: new Date(),
      severity: Severity[Severity.Information]
    });
  }
  public Warning(description: string): void {
    this.db.collection(this.basePath).add({
      userName: this.userName,
      description: description,
      timeStamp: new Date(),
      severity: Severity[Severity.Warning]
    });
  }
  public Error(description: string): void {
    this.db.collection(this.basePath).add({
      userName: this.userSession.getUserName(),
      description: description,
      timeStamp: new Date(),
      severity: Severity[Severity.Error]
    });
  }
  public Fatal(description: string): void {
    this.db.collection(this.basePath).add({
      userName: this.userSession.getUserName(),
      description: description,
      timeStamp: new Date(),
      severity: Severity[Severity.Fatal]
    });
  }
  public get(): Observable<any[]> {
    var start = new Date();
    start.setDate(start.getDate() - 10);
    var end = new Date();
    return this.db
      .collection<Log>(this.basePath, ref =>
        ref
          .where("timeStamp", ">=", start)
          .where("timeStamp", "<=", end)
          .orderBy("timeStamp", "desc")
      )
      .valueChanges();
  }
  getUserCollection() {
    this.LogsAngularFirestoreCollection = this.db.collection<Log>("Log");
    this.Logs$ = this.LogsAngularFirestoreCollection.snapshotChanges().map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Log;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }
    );
  }
}
