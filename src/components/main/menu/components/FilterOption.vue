<script setup lang="ts">
import { useContentStore } from "@/stores";
import {
  TagBox,
  type TagAdded,
  type TagInserted,
  type TagRemoved,
} from "../../new";
import { useGetTagsQuery } from "@/hooks/queries";
const contentStore = useContentStore();
const { data: tagData } = useGetTagsQuery();
const addTag = ({ tag }: TagAdded) => {
  contentStore.addTag(tag);
};
const insertTag = ({ tag, index }: TagInserted) => {
  contentStore.insertTag(tag, index);
};
const removeTag = ({ index }: TagRemoved) => {
  contentStore.removeTag(index);
};
</script>

<template>
  <TagBox
    :title="$t('spaceMenu.tags')"
    :availableTags="tagData ?? []"
    :selectedTags="contentStore.tags"
    :disableWeight="true"
    @onTagAdded="addTag"
    @onTagInserted="insertTag"
    @onTagRemoved="removeTag"
  />
</template>
