pragma solidity ^0.4.8;
contract Votes {

    struct Vote {
        address userAddress;
        uint proposalId;
        uint value;
        bool voteRevoked;
        string comment;
        uint timestamp;
    }

    Vote[] votes;

event VoteCompleted(uint proposalId);
    function vote(uint proposalId, uint value, string comment) returns (bytes32) {
        Vote memory vote;
        vote.userAddress = tx.origin;
        vote.proposalId = proposalId;
        vote.value = value;
        vote.voteRevoked = false;
        vote.comment = comment;
        vote.timestamp = now;

        votes.push(vote);
        VoteCompleted(proposalId);

        return "Voted successfully.";
    }

    function getProposalVoteCount(uint proposalId) constant returns (uint) {
        uint count = 0;
        for (uint i = 0; i < votes.length; i++) {
            if(votes[i].proposalId == proposalId) {
                count ++;
            }
        }
        return count;
    }


    function getProposalVote(uint proposalId, uint proposalIdIndex) constant returns (address, uint, uint, bool, string, uint) {
        uint matchCount = 0;
        for (uint i=0; i < votes.length; i++) {
            if (votes[i].proposalId == proposalId) {
                matchCount++;
                if (matchCount - 1 == proposalIdIndex) {
                    return (votes[i].userAddress, votes[i].proposalId, votes[i].value,
                            votes[i].voteRevoked, votes[i].comment, votes[i].timestamp);

                }
            }
        }
    }

    function getAcceptedAndRejectedVotes(uint proposalId) returns (uint, uint) {

        uint acceptedVotes = 0;
        uint rejectedVotes = 0;
        for (uint i = 0; i < votes.length; i++) {
            if (votes[i].proposalId == proposalId) {
                if (votes[i].accepts) {
                    acceptedVotes ++;
                } else {
                    rejectedVotes ++;
                }
            }
        }

        return (acceptedVotes, rejectedVotes);
    }


}
