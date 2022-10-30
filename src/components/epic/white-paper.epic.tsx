import PaperCommon from "../common/paper.common";
import ButtonCommon from "../common/button.common";

const WhitePaperEpic = () => {
  return (
      <PaperCommon variant="mb-10 primary">
          <div className="flex justify-between">
              <div>
                  <h2 className="text-4xl color-white">Event Whitepaper</h2>
                  <p className="text-xl color-white">Yes, our event has a whitepaper. You can check right here</p>
              </div>
              <div className="flex items-center flex-wrap-wrap">
                  <ButtonCommon variant="secondary mr-2">
                      Event Whitepaper
                  </ButtonCommon>
                  <ButtonCommon variant="secondary">
                      One Pager
                  </ButtonCommon>
              </div>
          </div>
      </PaperCommon>
  )
}

export default WhitePaperEpic