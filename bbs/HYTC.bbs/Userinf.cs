using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HYTC.bbs
{
    public class Userinf
    {
        private string _userID;

        public string UserID
        {
            get { return _userID; }
            set { _userID = value; }
        }
        private string _userName;

        public string UserName
        {
            get { return _userName; }
            set { _userName = value; }
        }
        private string _UserLevel;

        public string UserLevel
        {
            get { return _UserLevel; }
            set { _UserLevel = value; }
        }
        private string _userState;

        public string UserState
        {
            get { return _userState; }
            set { _userState = value; }
        }
        private string _userHeadImage;

        public string UserHeadImage
        {
            get { return _userHeadImage; }
            set { _userHeadImage = value; }
        }
        private string _userType;

        public string UserType
        {
            get { return _userType; }
            set { _userType = value; }
        }
    }
}