export const testManifest = {
  "@context": "http://iiif.io/api/presentation/3/context.json",
  id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner.json",
  type: "Manifest",
  label: {
    en: ["New Airliner, 1946/02/21"],
  },
  summary: {
    en: [
      "Douglas DC-6 luxury airliner tested in Long Beach, interior views for 56 passengers, converted into sleeping compartments for 26 passengers, at 20,000 ft.",
    ],
  },
  rights: "https://creativecommons.org/publicdomain/mark/1.0/",
  requiredStatement: {
    label: { en: ["Attribution"] },
    value: {
      en: ["Wikimedia Commons"],
    },
  },
  items: [
    {
      id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/1",
      type: "Canvas",
      width: 400,
      height: 300,
      duration: 102,
      label: {
        en: ["New Airliner - VP9 240P"],
      },
      thumbnail: [
        {
          id: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/1946-02-21_New_Airliner.ogv/120px--1946-02-21_New_Airliner.ogv.jpg",
          type: "Image",
          format: "image/jpeg",
          height: 90,
          width: 120,
        },
      ],
      items: [
        {
          id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/1/annotation_page/1",
          type: "AnnotationPage",
          items: [
            {
              id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/1/annotation_page/1/annotation/1",
              type: "Annotation",
              motivation: "painting",
              target:
                "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/1",
              body: {
                id: "https://upload.wikimedia.org/wikipedia/commons/6/6b/1946-02-21_New_Airliner.ogv",
                type: "Video",
                format: "video/ogg",
                height: 400,
                width: 300,
                duration: 102,
              },
            },
            {
              id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/1/page/annotation_page/1/annotation/2",
              type: "Annotation",
              motivation: "supplementing",
              body: [
                {
                  id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/supplementing/new_airliner_en.vtt",
                  type: "Text",
                  format: "text/vtt",
                  label: {
                    en: ["en"],
                  },
                  language: "en",
                },
              ],
              target:
                "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/1",
            },
            {
              id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/1/page/annotation_page/1/annotation/3",
              type: "Annotation",
              motivation: "supplementing",
              body: [
                {
                  id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/supplementing/new_airliner_es.vtt",
                  type: "Text",
                  format: "text/vtt",
                  label: {
                    en: ["es"],
                  },
                  language: "es",
                },
              ],
              target:
                "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/1",
            },
            {
              id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/1/page/annotation_page/1/annotation/4",
              type: "Annotation",
              motivation: "supplementing",
              body: [
                {
                  id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/supplementing/new_airliner_fr.vtt",
                  type: "Text",
                  format: "text/vtt",
                  label: {
                    en: ["fr"],
                  },
                  language: "fr",
                },
              ],
              target:
                "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/1",
            },
          ],
        },
      ],
    },
    {
      id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/2",
      type: "Canvas",
      width: 400,
      height: 300,
      duration: 102,
      label: {
        en: ["New Airliner - VP9 180P"],
      },
      thumbnail: [
        {
          id: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/1946-02-21_New_Airliner.ogv/120px--1946-02-21_New_Airliner.ogv.jpg",
          type: "Image",
          format: "image/jpeg",
          height: 90,
          width: 120,
        },
      ],
      items: [
        {
          id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/2/annotation_page/1",
          type: "AnnotationPage",
          items: [
            {
              id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/2/annotation_page/1/annotation/1",
              type: "Annotation",
              motivation: "painting",
              target:
                "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/2",
              body: {
                id: "https://upload.wikimedia.org/wikipedia/commons/6/6b/1946-02-21_New_Airliner.ogv",
                type: "Video",
                format: "video/ogg",
                height: 400,
                width: 300,
                duration: 102,
              },
            },
            {
              id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/2/page/annotation_page/1/annotation/2",
              type: "Annotation",
              motivation: "supplementing",
              body: [
                {
                  id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/supplementing/new_airliner_en.vtt",
                  type: "Text",
                  format: "text/vtt",
                  label: {
                    en: ["en"],
                  },
                  language: "en",
                },
              ],
              target:
                "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/2",
            },
          ],
        },
      ],
    },
    {
      id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/3",
      type: "Canvas",
      width: 400,
      height: 300,
      duration: 102,
      label: {
        en: ["New Airliner - VP9 120P"],
      },
      thumbnail: [
        {
          id: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/1946-02-21_New_Airliner.ogv/120px--1946-02-21_New_Airliner.ogv.jpg",
          type: "Image",
          format: "image/jpeg",
          height: 90,
          width: 120,
        },
      ],
      items: [
        {
          id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/3/annotation_page/1",
          type: "AnnotationPage",
          items: [
            {
              id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/3/annotation_page/1/annotation/1",
              type: "Annotation",
              motivation: "painting",
              target:
                "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/3",
              body: {
                id: "https://upload.wikimedia.org/wikipedia/commons/6/6b/1946-02-21_New_Airliner.ogv",
                type: "Video",
                format: "video/ogg",
                height: 400,
                width: 300,
                duration: 102,
              },
            },
            {
              id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/3/page/annotation_page/1/annotation/2",
              type: "Annotation",
              motivation: "supplementing",
              body: [
                {
                  id: "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/supplementing/new_airliner_en.vtt",
                  type: "Text",
                  format: "text/vtt",
                  label: {
                    en: ["en"],
                  },
                  language: "en",
                },
              ],
              target:
                "https://raw.githubusercontent.com/mathewjordan/mirador-playground/main/assets/iiif/manifest/new_airliner/canvas/3",
            },
          ],
        },
      ],
    },
  ],
};
