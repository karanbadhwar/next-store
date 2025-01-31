import CheckBoxInput from "@/components/form/CheckBoxInput";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { faker } from "@faker-js/faker";

const createProductAction = async (formData: FormData) => {
  "use server";
  const name = formData.get("name") as string;
  console.log(name);
};

function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });

  return (
    <section>
      <h1 className="capitalize font-semibold text-2xl mb-8">create product</h1>
      <div className="border p-8 rounded-md">
        <form action={createProductAction}>
          <FormInput
            name="name"
            type="text"
            defaultValue={name}
            label="product name"
          />

          <Button type="submit" size="lg">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}

export default CreateProductPage;
