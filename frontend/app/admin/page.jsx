"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Smartphone, Save, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Form schema with validation
const phoneFormSchema = z.object({
  brand: z.string().min(1, "Brand is required"),
  name: z.string().min(1, "Name is required"),
  price: z.coerce.number().min(1, "Price is required"),
  release_date: z.string().optional(),
  images_url: z.string().optional(),
  originalprice: z.coerce.number().optional(),
  rating: z.coerce.number().min(0).max(5).optional(),
  reviews: z.coerce.number().optional(),
  image: z.string().optional(),
  rank: z.coerce.number().optional(),
  specs: z.string().optional(),
  camera: z.string().optional(),
  battery: z.string().optional(),
  processor: z.string().optional(),
  display: z.string().optional(),
});

export default function AdminPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [specsList, setSpecsList] = useState([]);
  const [newSpec, setNewSpec] = useState("");

  // Initialize form with default values
  const form = useForm({
    resolver: zodResolver(phoneFormSchema),
    defaultValues: {
      brand: "",
      name: "",
      price: undefined,
      release_date: "",
      images_url: "",
      originalprice: undefined,
      rating: undefined,
      reviews: undefined,
      image: "",
      rank: undefined,
      specs: "",
      camera: "",
      battery: "",
      processor: "",
      display: "",
    },
  });

  // Add a new spec to the specs list
  const addSpec = () => {
    if (newSpec.trim()) {
      setSpecsList([...specsList, newSpec.trim()]);
      setNewSpec("");
    }
  };

  // Remove a spec from the specs list
  const removeSpec = (index) => {
    setSpecsList(specsList.filter((_, i) => i !== index));
  };

  // Handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Convert specs array to string for API
    const formattedData = {
      ...data,
      specs: specsList.join("|"), // Join specs with a delimiter
    };

    try {
      const response = await fetch("/addphonesunder20k", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();

      toast({
        title: "Success!",
        description: "Phone data has been added successfully.",
        variant: "default",
      });

      // Reset form
      form.reset();
      setSpecsList([]);

      // Refresh data
      router.refresh();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to add phone data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c24] text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Smartphone className="h-8 w-8 text-[#4c5af7]" />
          Phone Admin Dashboard
        </h1>

        <Tabs defaultValue="add" className="w-full">
          <TabsList className="bg-[#1a1a3a] mb-6">
            <TabsTrigger value="add">Add New Phone</TabsTrigger>
            <TabsTrigger value="manage">Manage Phones</TabsTrigger>
          </TabsList>

          <TabsContent value="add">
            <Card className="bg-[#0f0f2b] border-[#1a1a3a]">
              <CardHeader>
                <CardTitle className="text-xl">
                  Add Phone Under ₹20,000
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Basic Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium border-b border-[#1a1a3a] pb-2">
                          Basic Information
                        </h3>

                        <FormField
                          control={form.control}
                          name="brand"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Brand *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Samsung, Xiaomi, etc."
                                  {...field}
                                  className="bg-[#1a1a3a] border-[#252550]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Model Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Galaxy A54, Redmi Note 12, etc."
                                  {...field}
                                  className="bg-[#1a1a3a] border-[#252550]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Price (₹) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="15999"
                                    {...field}
                                    className="bg-[#1a1a3a] border-[#252550]"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="originalprice"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Original Price (₹)</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="19999"
                                    {...field}
                                    className="bg-[#1a1a3a] border-[#252550]"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="release_date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Release Date</FormLabel>
                              <FormControl>
                                <Input
                                  type="date"
                                  {...field}
                                  className="bg-[#1a1a3a] border-[#252550]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="rating"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Rating (0-5)</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="5"
                                    placeholder="4.5"
                                    {...field}
                                    className="bg-[#1a1a3a] border-[#252550]"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="reviews"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Number of Reviews</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="327"
                                    {...field}
                                    className="bg-[#1a1a3a] border-[#252550]"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="rank"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Rank</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder="1"
                                  {...field}
                                  className="bg-[#1a1a3a] border-[#252550]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Technical Specifications */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium border-b border-[#1a1a3a] pb-2">
                          Technical Specifications
                        </h3>

                        <FormField
                          control={form.control}
                          name="processor"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Processor</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Snapdragon 695, Dimensity 700, etc."
                                  {...field}
                                  className="bg-[#1a1a3a] border-[#252550]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="camera"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Camera</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="50MP + 8MP + 2MP"
                                  {...field}
                                  className="bg-[#1a1a3a] border-[#252550]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="display"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Display</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder='6.67" AMOLED, 120Hz'
                                  {...field}
                                  className="bg-[#1a1a3a] border-[#252550]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="battery"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Battery</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="5000mAh, 33W Fast Charging"
                                  {...field}
                                  className="bg-[#1a1a3a] border-[#252550]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Specs List */}
                        <div>
                          <FormLabel>Specifications List</FormLabel>
                          <div className="flex gap-2 mb-2">
                            <Input
                              placeholder="Add a specification (e.g., 8GB RAM)"
                              value={newSpec}
                              onChange={(e) => setNewSpec(e.target.value)}
                              className="bg-[#1a1a3a] border-[#252550] flex-1"
                            />
                            <Button
                              type="button"
                              onClick={addSpec}
                              variant="outline"
                              className="border-[#4c5af7] text-[#4c5af7]"
                            >
                              <Plus className="h-4 w-4 mr-1" /> Add
                            </Button>
                          </div>

                          {specsList.length > 0 ? (
                            <div className="bg-[#1a1a3a] rounded-md p-3 mt-2">
                              <ul className="space-y-2">
                                {specsList.map((spec, index) => (
                                  <li
                                    key={index}
                                    className="flex justify-between items-center"
                                  >
                                    <span>{spec}</span>
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => removeSpec(index)}
                                      className="h-8 w-8 p-0 text-red-500 hover:text-red-400 hover:bg-[#252550]"
                                    >
                                      <Trash className="h-4 w-4" />
                                    </Button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <p className="text-sm text-gray-400 mt-2">
                              No specifications added yet.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Image URLs */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium border-b border-[#1a1a3a] pb-2">
                        Images
                      </h3>

                      <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Main Image URL</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://example.com/phone-image.jpg"
                                {...field}
                                className="bg-[#1a1a3a] border-[#252550]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="images_url"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Images URLs</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Enter multiple image URLs, one per line"
                                {...field}
                                className="bg-[#1a1a3a] border-[#252550] min-h-[100px]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full md:w-auto bg-[#4c5af7] hover:bg-[#3a48e3]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Saving...</>
                      ) : (
                        <>
                          <Save className="h-4 w-4 mr-2" /> Save Phone Data
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage">
            <Card className="bg-[#0f0f2b] border-[#1a1a3a]">
              <CardHeader>
                <CardTitle className="text-xl">Manage Phones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Phone management functionality will be implemented here. You
                  can add features to view, edit, and delete phone entries.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
