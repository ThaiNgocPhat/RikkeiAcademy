//public class TennisGame {
//    public static String getScore(String player1Name, String player2Name, int player1Score, int player2Score) {
//        String score = "";
//        int tempScore = 0;
//        if (player1Score == player2Score) {
//            switch (player1Score) {
//                case 0:
//                    score = "Love-All";
//                    break;
//                case 1:
//                    score = "Fifteen-All";
//                    break;
//                case 2:
//                    score = "Thirty-All";
//                    break;
//                case 3:
//                    score = "Forty-All";
//                    break;
//                default:
//                    score = "Deuce";
//                    break;
//            }
//        } else if (player1Score >= 4 || player2Score >= 4) {
//            score = getWinner(player1Score, player2Score);
//        } else {
//            score = getCurrentScore(player1Score, player2Score, score);
//        }
//        return score;
//    }
//
//    private static String getCurrentScore(int player1Score, int player2Score, String score) {
//        int tempScore;
//        for (int i = 1; i < 3; i++) {
//            if (i == 1) tempScore = player1Score;
//            else {
//                score += "-";
//                tempScore = player2Score;
//            }
//            switch (tempScore) {
//                case 0:
//                    score += "Love";
//                    break;
//                case 1:
//                    score += "Fifteen";
//                    break;
//                case 2:
//                    score += "Thirty";
//                    break;
//                case 3:
//                    score += "Forty";
//                    break;
//            }
//        }
//        return score;
//    }
//
//    private static String getWinner(int player1Score, int player2Score) {
//        String score;
//        int minusResult = player1Score - player2Score;
//        if (minusResult == 1) score = "Advantage player1";
//        else if (minusResult == -1) score = "Advantage player2";
//        else if (minusResult >= 2) score = "Win for player1";
//        else score = "Win for player2";
//        return score;
//    }
//}



public class TennisGame {
    public static String getScore(String player1Name, String player2Name, int player1Score, int player2Score) {
        if (player1Score == player2Score) {
            return getTiedScore(player1Score);
        } else if (player1Score >= 4 || player2Score >= 4) {
            return getWinningScore(player1Score, player2Score);
        } else {
            return getRunningScore(player1Score, player2Score);
        }
    }

    private static String getTiedScore(int score) {
        switch (score) {
            case 0: return "Love-All";
            case 1: return "Fifteen-All";
            case 2: return "Thirty-All";
            case 3: return "Forty-All";
            default: return "Deuce";
        }
    }

    private static String getRunningScore(int player1Score, int player2Score) {
        return getScoreName(player1Score) + "-" + getScoreName(player2Score);
    }

    private static String getScoreName(int score) {
        switch (score) {
            case 0: return "Love";
            case 1: return "Fifteen";
            case 2: return "Thirty";
            case 3: return "Forty";
            default: throw new IllegalArgumentException("Invalid score: " + score);
        }
    }

    private static String getWinningScore(int player1Score, int player2Score) {
        int scoreDifference = player1Score - player2Score;
        if (scoreDifference == 1) return "Advantage player1";
        if (scoreDifference == -1) return "Advantage player2";
        if (scoreDifference >= 2) return "Win for player1";
        return "Win for player2";
    }
}
