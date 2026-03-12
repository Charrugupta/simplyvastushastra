import Map "mo:core/Map";
import Int "mo:core/Int";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Submission = {
    name : Text;
    email : Text;
    phone : Text;
    serviceInterest : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Submission {
    public func compareByTimestamp(sub1 : Submission, sub2 : Submission) : Order.Order {
      Int.compare(sub1.timestamp, sub2.timestamp);
    };
  };

  let submissions = Map.empty<Time.Time, Submission>();

  public shared ({ caller }) func submitForm(name : Text, email : Text, phone : Text, serviceInterest : Text, message : Text) : async () {
    let timestamp = Time.now();
    let submission : Submission = {
      name;
      email;
      phone;
      serviceInterest;
      message;
      timestamp;
    };
    submissions.add(timestamp, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort(Submission.compareByTimestamp);
  };
};
