import axios from "axios";
import { get } from "lodash";
import { async } from "@babel/runtime/regenerator"
import { log, logErrors, descriptionModal } from "./utility"
import { descriptionRequest } from "./ApiRequests";


export const displayBookDescription = async () => {
    try {
        // take all description-buttons
        const descriptionButton = document.querySelectorAll(".description-button");
        
        // addEventListener
        descriptionButton.forEach((button  => {
          button.addEventListener('click', (e) => {
            descriptionRequest((e.target.parentElement).dataset.id)})}))
    } catch (error) {
        logErrors(error)
    }
}
