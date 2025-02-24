import { creactLandmarkAction } from "@/blackend/actions";
import { SubmitButton } from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import DistrictInput from "@/components/form/DistrictInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import MapLandmark from "@/components/map/MapLandmark";

import React from "react";

const CreateLandmarkPage = async () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 ">Create Landmark</h1>
      <div className="border p-8 rounded-md ">
        <FormContainer action={creactLandmarkAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="name"
              label="Landmark Name"
              type="text"
              placeholder="Landmark Name"
            />

            <CategoryInput />
          </div>
          <TextAreaInput name="description" />

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="price"
              label="Price"
              type="number"
              placeholder=""
            />
            <DistrictInput />
          </div>
          <ImageInput/>
          <MapLandmark />

          <SubmitButton text="create Landmark" size="default" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateLandmarkPage;
